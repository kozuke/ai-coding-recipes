import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const tipsDirectory = path.join(process.cwd(), 'content/tips');

type SearchIndexItem = {
  slug: string;
  title: string;
  tags: string[];
  content: string;
  summary?: string;
};

async function generateSearchIndex() {
  try {
    console.log('Generating search index...');
    const fileNames = fs.readdirSync(tipsDirectory);
    
    const searchIndex: SearchIndexItem[] = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(tipsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        const plainTextContent = content.replace(/\n/g, ' ').replace(/```[\s\S]*?```/g, ' ');
        
        return {
          slug,
          title: data.title || '',
          tags: data.tags || [],
          content: plainTextContent,
          summary: data.summary || '',
        };
      });
    
    const outputPath = path.join(process.cwd(), 'public/search-index.json');
    
    if (!fs.existsSync(path.join(process.cwd(), 'public'))) {
      fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));
    
    console.log(`Search index generated at ${outputPath}`);
  } catch (error) {
    console.error('Error generating search index:', error);
  }
}

generateSearchIndex();
