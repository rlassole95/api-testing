describe('API Testing with Cypress', () => {

  // Load fixture data
  let testData;
  before(() => {
    cy.fixture('data').then((data) => {
      testData = data;
    });
  });

  // Test a GET request to retrieve a list of users
  it('should return a list of users', () => {
    cy.request('GET', '/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(10);  // Verifying the length of users
        cy.log('Users list fetched successfully!');
      });
  });

  // Test a POST request to create a new post using fixture data and custom command
  it('should create a new post using fixture data', () => {
    cy.createPost(testData.newPost)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.include(testData.newPost);
        cy.log('New post created successfully!');
      });
  });

  // Test a GET request to fetch a single post
  it('should fetch a single post by ID', () => {
    const postId = 1;
    cy.request('GET', `/posts/${postId}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(postId);
        cy.log(`Fetched post with ID: ${postId}`);
      });
  });

  // Test a PUT request to update a post
  it('should update an existing post', () => {
    const postId = 1;
    cy.updatePost(postId, testData.updatedPost)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq(testData.updatedPost.title);
        expect(response.body.body).to.eq(testData.updatedPost.body);
        cy.log(`Post with ID ${postId} updated successfully!`);
      });
  });

  // Test a DELETE request to remove a post
  it('should delete a post', () => {
    const postId = 1;
    cy.deletePost(postId)
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log(`Post with ID ${postId} deleted successfully!`);
      });
  });

  // Negative test: Invalid POST request (empty title)
  it('should return 400 for invalid post request', () => {
    cy.request({
      method: 'POST',
      url: '/posts',
      body: testData.invalidPost,
      failOnStatusCode: true  // Prevent Cypress from failing on 4xx errors
    }).then((response) => {
      expect(response.status).to.eq(400);
      cy.log('Invalid post request failed as expected', response.status);
    });
  });
});
