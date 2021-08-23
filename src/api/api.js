const BASE_URL = 'https://ipapi.co/'

export function getIpInfo(foundIp) {
  console.log(`URLA --- ${BASE_URL}${foundIp}/json`);
  return fetch(`${BASE_URL}${foundIp}/json`)
    .then(response => response.json())
}
