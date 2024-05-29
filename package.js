Package.describe({
  name: 'tunguska:reactive-aggregate',
  version: '1.3.17',
  summary: 'Publish aggregations reactively',
  git: 'https://github.com/lynchharrison/tunguska-reactive-aggregate',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0-rc.0');
  api.use('mongo');
  api.use('ecmascript');
  api.use('promise');
  api.mainModule('aggregate.js', 'server');
});
