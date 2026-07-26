(async function () {
  try {
    const dl = await import('../src/lib/dataLoader.js');
    const all = dl.getAllInventors();
    console.log(JSON.stringify(all.slice(0, 5), null, 2));
  } catch (e) {
    console.error('previewDataLoader error:', e);
    process.exit(1);
  }
})();
