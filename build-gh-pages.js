const ghpages = require('gh-pages')

console.log('正在发布中...')

ghpages.publish('build', {
  branch: 'gh-pages',
  repo: 'git@github.com:linxiaodi/applovin-testing.git'
}, () => {
  console.log('发布成功！')
});
