require('shelljs/global');

rm('-rf', 'dist');
rm('-rf', 'public');

rm('-f', 'paeckchen.cache.json');

mkdir('-p', 'public/css');
mkdir('-p', 'public/js');

cp('src/index.html', 'public/index.html');
