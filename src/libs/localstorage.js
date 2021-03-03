/*
 * localstorage.js
 * 本地存储封装
 * */

const storage = {};
// 获取缓存信息
storage.getStorageItem = function(key) {
  const item = localStorage.getItem(key);
  // 判断是字符串还是对象
  const result = /^[{\[].*[}\]]$/g.test(item);
  if (result) {
    return JSON.parse(item);
  } else {
    return item;
  }
},
// 设置缓存信息
storage.setStorageItem = function(key, value) {
  // 判断是字符串还是对象
  if (typeof value === 'string') {
    localStorage.setItem(key, value);
  } else {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  }
},
// 删除某个缓存信息
storage.removeStorageItem = function(key) {
  localStorage.removeItem(key);
},
// 清楚所有缓存
storage.clearAllStorage = function() {
  localStorage.clear();
};

export default storage;
