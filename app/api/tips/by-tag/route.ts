import { NextResponse } from 'next/server';
import { getAllTips } from '../../../../lib/tips';

export const dynamic = 'force-static';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');
    
    if (!tag) {
      return NextResponse.json({ error: 'Tag parameter is required' }, { status: 400 });
    }
    
    console.log('API: Requested tag:', tag);
    
    const allTips = getAllTips();
    console.log('API: All tips count:', allTips.length);
    
    const normalizedTag = tag.trim();
    console.log('API: Normalized tag:', normalizedTag);
    
    const filteredTips = allTips.filter((tip) => {
      if (!tip.tags || !Array.isArray(tip.tags)) return false;
      
      return tip.tags.some(t => {
        const normalizedTipTag = t.trim();
        const isMatch = normalizedTipTag === normalizedTag;
        console.log(`API: Comparing: "${normalizedTipTag}" with "${normalizedTag}" = ${isMatch}`);
        return isMatch;
      });
    });
    
    console.log('API: Filtered tips count:', filteredTips.length);
    console.log('API: Filtered tips:', filteredTips.map(t => t.title));
    
    return NextResponse.json(filteredTips);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
