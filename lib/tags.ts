import { getAllTips, Tip } from './tips';
export type { Tip } from './tips';

/**
 * 全タグの一覧を取得する
 * @returns 重複のない全タグの配列
 */
export function getAllTags(): string[] {
  const tips = getAllTips();
  const tagsSet = new Set<string>();
  
  tips.forEach((tip) => {
    if (tip.tags && Array.isArray(tip.tags)) {
      tip.tags.forEach((tag) => tagsSet.add(tag));
    }
  });
  
  return Array.from(tagsSet).sort();
}

/**
 * 指定したタグを持つTipsの一覧を取得する
 * @param tag 検索対象のタグ
 * @returns 指定したタグを持つTipsの配列（作成日降順）
 */
export function getTipsByTag(tag: string): Tip[] {
  const tips = getAllTips();
  console.log('All tips:', tips);
  console.log('Searching for tag:', tag);
  
  const normalizedTag = tag.trim();
  const filteredTips = tips.filter((tip) => {
    if (!tip.tags || !Array.isArray(tip.tags)) return false;
    
    return tip.tags.some(t => t.trim() === normalizedTag);
  });
  
  console.log('Filtered tips:', filteredTips);
  return filteredTips;
}
