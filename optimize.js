import sharp from 'sharp';
sharp('public/images/hero_background.png')
  .webp({ quality: 80 })
  .toFile('public/images/hero_background.webp')
  .then(info => console.log('Optimized:', info))
  .catch(err => console.error('Error:', err));
