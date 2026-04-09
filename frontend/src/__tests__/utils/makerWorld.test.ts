import { describe, expect, it } from 'vitest';
import {
  buildMakerWorldCnSearchUrl,
  getMakerWorldModelDisplayName,
  isMakerWorldCnModelUrl,
  MAKERWORLD_CN_EXPLORE_URL,
} from '../../utils/makerWorld';

describe('makerWorld utils', () => {
  it('accepts MakerWorld China model detail URLs with or without /zh/', () => {
    expect(isMakerWorldCnModelUrl('https://makerworld.com.cn/zh/models/123-demo-model')).toBe(true);
    expect(isMakerWorldCnModelUrl('https://makerworld.com.cn/models/123-demo-model')).toBe(true);
  });

  it('rejects non-model or non-China URLs', () => {
    expect(isMakerWorldCnModelUrl('https://makerworld.com/zh/models/123-demo-model')).toBe(false);
    expect(isMakerWorldCnModelUrl('https://makerworld.com.cn/zh/3d-models')).toBe(false);
    expect(isMakerWorldCnModelUrl('not-a-url')).toBe(false);
  });

  it('builds a search URL and falls back to the explore page without a keyword', () => {
    expect(buildMakerWorldCnSearchUrl('')).toBe(MAKERWORLD_CN_EXPLORE_URL);
    expect(buildMakerWorldCnSearchUrl('gear box')).toBe(
      'https://makerworld.com.cn/zh/search/models?keyword=gear+box'
    );
  });

  it('derives a readable title from the model URL slug', () => {
    expect(
      getMakerWorldModelDisplayName(
        'https://makerworld.com.cn/zh/models/826146-gridfinity-box-holder',
        'Fallback'
      )
    ).toBe('gridfinity box holder');
    expect(getMakerWorldModelDisplayName('invalid', 'Fallback')).toBe('Fallback');
  });
});
