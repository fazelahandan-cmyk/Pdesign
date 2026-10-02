export const PURCHASE_MESSAGE='درگاه درحال حاضر در دسترس نمیباشد لطفا برای ثبت سفارش به تلگرام مراجعه کنید';
export const TELEGRAM_URL='https://t.me/PDH_SUP';
export const PAGE_SIZE=10;
export function paginate(items,page){const pages=Math.max(1,Math.ceil(items.length/PAGE_SIZE));const current=Math.min(pages,Math.max(1,Number(page)||1));return {current,pages,items:items.slice((current-1)*PAGE_SIZE,current*PAGE_SIZE)}}
export function recommendations(items,page){const visible=paginate(items,page).items;return visible.filter((_,i)=>[0,3,7].includes(i))}
