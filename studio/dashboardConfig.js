export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e43aecfcdc0341667c77bc3',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-cdjhrqim',
                  apiId: 'c38be630-dc83-447d-8e3f-cb15ffdb75b7'
                },
                {
                  buildHookId: '5e43aecfc3c3dda65004a8c2',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-wjomf5e4',
                  apiId: 'f7285a78-c738-4999-aa45-cd5fb0f20ebd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/monarchmehta/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-wjomf5e4.netlify.com', category: 'apps'}
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
