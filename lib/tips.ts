import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function findValidDirectory(...possiblePaths: string[]): string {
  for (const dirPath of possiblePaths) {
    try {
      if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
        console.log('Found valid tips directory:', dirPath);
        return dirPath;
      }
    } catch (error) {
      console.error(`Error checking path ${dirPath}:`, error);
    }
  }
  
  const defaultPath = path.join(process.cwd(), 'content/tips');
  console.warn('No valid directory found, using default:', defaultPath);
  return defaultPath;
}

const tipsDirectory = findValidDirectory(
  path.join(process.cwd(), 'content/tips'),
  path.join(process.cwd(), './content/tips'),
  path.join(process.cwd(), '../content/tips'),
  path.resolve(process.cwd(), 'content/tips')
);

console.log('Selected tips directory path:', tipsDirectory);

try {
  const files = fs.readdirSync(tipsDirectory);
  console.log('Files in tips directory:', files);
  console.log('Current working directory:', process.cwd());
} catch (error) {
  console.error('Error reading tips directory:', error);
}

export type Tip = {
  slug: string;
  title: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  content: string;
};

export function getAllTips(): Tip[] {
  try {
    const fileNames = fs.readdirSync(tipsDirectory);
    console.log('Reading files from directory:', tipsDirectory);
    console.log('Found files:', fileNames);
    
    const allTipsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(tipsDirectory, fileName);
          
          console.log(`Processing file: ${fileName}, full path: ${fullPath}`);
          
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          
          const matterResult = matter(fileContents);
          console.log(`File ${fileName} tags:`, matterResult.data.tags);
          
          return {
            slug,
            title: matterResult.data.title,
            tags: matterResult.data.tags,
            created_at: matterResult.data.created_at,
            updated_at: matterResult.data.updated_at,
            content: matterResult.content,
          } as Tip;
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
          return null;
        }
      })
      .filter((tip): tip is Tip => tip !== null);
    
    console.log('Total tips loaded:', allTipsData.length);
    
    return allTipsData.sort((a, b) => {
      if (a.created_at < b.created_at) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error in getAllTips:', error);
    return [];
  }
}

export function getTipBySlug(slug: string): Tip | null {
  try {
    console.log(`Attempting to get tip by slug: ${slug}`);
    const fullPath = path.join(tipsDirectory, `${slug}.md`);
    console.log(`Full path for slug ${slug}: ${fullPath}`);
    
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found for slug: ${slug}, path: ${fullPath}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log(`Successfully read file for slug: ${slug}`);
    
    const matterResult = matter(fileContents);
    console.log(`Parsed frontmatter for slug ${slug}, tags:`, matterResult.data.tags);
    
    return {
      slug,
      title: matterResult.data.title,
      tags: matterResult.data.tags,
      created_at: matterResult.data.created_at,
      updated_at: matterResult.data.updated_at,
      content: matterResult.content,
    } as Tip;
  } catch (error) {
    console.error(`Error getting tip by slug: ${slug}`, error);
    return null;
  }
}
