// Custom command to create a new post
Cypress.Commands.add('createPost', (post) => {
  return cy.request('POST', '/posts', post);
});

// Custom command to update a post by ID
Cypress.Commands.add('updatePost', (postId, updatedPost) => {
  return cy.request('PUT', `/posts/${postId}`, updatedPost);
});

// Custom command to delete a post by ID
Cypress.Commands.add('deletePost', (postId) => {
  return cy.request('DELETE', `/posts/${postId}`);
});
