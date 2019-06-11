export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cffdf4a57213a5c5f2f7049',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-34vcnt7k',
                  apiId: '942212f2-0893-4354-b82b-e0236de6ebcd'
                },
                {
                  buildHookId: '5cffdf4a89e1dd044ee19444',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qcs2jstg',
                  apiId: 'c2772f34-27ab-4a35-a5a5-a832dc5e8b1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ekosampoerna/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qcs2jstg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
