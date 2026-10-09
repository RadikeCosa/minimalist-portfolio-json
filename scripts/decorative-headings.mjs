// Decorate Markdown heading text during the build, leaving heading IDs intact.
export default {
  name: 'decorative-headings',
  element: {
    filter: ['h2', 'h3'],
    visit(node, ctx) {
      // Linked headings retain their ordinary link feedback.
      if (node.children.some(child => child.tagName === 'a')) return;
      for (const child of node.children) {
        ctx.wrapNode(child, {
          type: 'element',
          tagName: 'span',
          properties: { className: ['decorative-title'] },
          children: [],
        });
      }
    },
  },
};
