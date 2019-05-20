export const WwwWsjComExtractor = {
  domain: 'www.wsj.com',

  title: {
    selectors: [
      ['meta[name="article.headline"]', 'content'],
      ['meta[name="article.headline"]', 'value'],
      '.wsj-article-headline',
    ],
  },

  author: {
    selectors: [
      ['meta[name="author"]', 'content'],
      ['meta[name="author"]', 'value'],
      '.name',
    ],
  },

  date_published: {
    selectors: [
      ['meta[name="article.published"]', 'content'],
      ['meta[name="article.published"]', 'value'],
    ],
  },

  dek: null,

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['.article-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.wsj-body-ad-placement', '.media-object-chiclet'],
  },
};
