Package.describe({
  name: 'tunguska:reactive-aggregate',
  version: '1.3.17',
  summary: 'Publish aggregations reactively',
  git: 'https://github.com/lynchharrison/tunguska-reactive-aggregate',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.5');
  api.use('mongo@2.0.0-rc300.2');
  api.use('ecmascript');
  api.use('promise@1.0.0-rc300.1');
  api.mainModule('aggregate.js', 'server');
});
