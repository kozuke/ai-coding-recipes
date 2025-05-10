import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const tipsDirectory = path.join(process.cwd(), 'content/tips');
console.log('Tips directory path:', tipsDirectory);

try {
  const files = fs.readdirSync(tipsDirectory);
  console.log('Files in tips directory:', files);
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
  const fileNames = fs.readdirSync(tipsDirectory);
  const allTipsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');

    const fullPath = path.join(tipsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      tags: matterResult.data.tags,
      created_at: matterResult.data.created_at,
      updated_at: matterResult.data.updated_at,
      content: matterResult.content,
    } as Tip;
  });

  return allTipsData.sort((a, b) => {
    if (a.created_at < b.created_at) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getTipBySlug(slug: string): Tip | null {
  try {
    const fullPath = path.join(tipsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

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
