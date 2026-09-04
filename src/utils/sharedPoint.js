export function getSharedPointId() {
  return new URLSearchParams(window.location.search).get('point');
}

export function createShareUrl(pointId) {
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('point', pointId);
  return url.toString();
}

export function isSelectedPoint(sharedPointId, pointId) {
  return Boolean(sharedPointId && sharedPointId === pointId);
}
