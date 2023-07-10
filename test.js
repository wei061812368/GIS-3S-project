//去云
function maskS2clouds(image) {
  var qa = image.select('QA60');
  
  // Bits 10 and 11 分别是云和卷云
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}
var geometry = ee.Geometry.Polygon(
  [[[117.1, 28.6],
          [117.1, 27.8],
          [117.5, 27.8],
          [117.5, 28.6]]]);

// 选择哨兵2（Sentinel-2）数据集
var collection = ee.ImageCollection('COPERNICUS/S2');

// 筛选日期和地理区域
var filteredCollection = collection.filterDate('2016-07-01', '2017-07-01')
                                   .filterBounds(geometry)
                                   .map(maskS2clouds)
                                   .select(["B2","B3","B4"], ['blue','green','red']);

var selectedCollection = filteredCollection.map(function(image) {
  return image.select(image.bandNames());
});

// 导出数据到google drive
Export.image.toDrive({
  image: selectedCollection.median(),
  description: 'Sentinel_export',
  folder: 'GEE_exports',
  scale: 10,
  region: geometry
});