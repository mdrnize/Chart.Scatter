
Package.describe({
  name: 'modernize:chart-scatter',
  summary: 'Scatter chart plugin for Chart.js',
  version: '1.1.2',
  git: 'https://github.com/mdrnize/Chart.Scatter.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.imply('chart:chart');
  api.use('chart:chart', 'client', { weak:false, unordered: false });

  api.addFiles(['meteor/export.js', 'Chart.Scatter.js'], 'client');
});
