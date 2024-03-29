app.config(function($mdThemingProvider) {
  // create new themes
  var colors;
  colors = {
    cogreen: '#99cc33'
  };
  angular.forEach(colors, function(color, key) {
    return $mdThemingProvider.definePalette(key, {
      '50': color,
      '100': color,
      '200': color,
      '300': color,
      '400': color,
      '500': color,
      '600': color,
      '700': color,
      '800': color,
      '900': color,
      'A100': color,
      'A200': color,
      'A400': color,
      'A700': color,
      'contrastDefaultColor': 'light'
    });
  });
  $mdThemingProvider.definePalette('white', {
    '50': '#fff',
    '100': '#fff',
    '200': '#fff',
    '300': '#fff',
    '400': '#fff',
    '500': '#fff',
    '600': '#fff',
    '700': '#fff',
    '800': '#fff',
    '900': '#fff',
    'A100': '#fff',
    'A200': '#fff',
    'A400': '#fff',
    'A700': '#fff',
    'contrastDefaultColor': 'dark'
  });
  return $mdThemingProvider.theme('default').primaryPalette('cogreen')//.accentPalette('color2').warnPalette('red');
});
