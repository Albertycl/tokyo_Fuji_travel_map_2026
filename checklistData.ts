export interface ChecklistCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  items: ChecklistItemData[];
}

export interface ChecklistItemData {
  id: string;
  name: string;
  note?: string;
  important?: boolean;
}

export const PACKING_CHECKLIST: ChecklistCategory[] = [
  {
    id: 'documents',
    title: '重要證件、票券與行前安排',
    emoji: '🎒',
    description: '出發前最優先確認 - 這區的東西少了就無法出門，或抵達時會很麻煩，請務必再次檢查。',
    items: [
      { id: 'passport', name: '護照', note: '有效期需在回國日算起 6 個月以上' },
      { id: 'license', name: '駕照正本 & 日文譯本', note: '⚠️ 生死攸關：請務必拿出兩者核對，「地址」欄位必須完全一致！若搬過家導致地址不同，絕對無法租車，請務必提前處理', important: true },
      { id: 'insurance', name: '海外旅遊保險單', note: '包含醫療險與不便險。建議列印紙本或將電子檔存手機，並記下海外緊急救援電話' },
      { id: 'airport-transfer', name: '機場接送確認憑證', note: '確認去回程的預約時間、集合地點、司機聯絡方式' },
      { id: 'visit-japan-web', name: 'Visit Japan Web QR Code', note: '入境審查、海關申報。建議截圖存在手機相簿，以防機場網路不穩' },
      { id: 'cash', name: '日幣現金', note: '雖然刷卡方便，但神社、部分拉麵店或鄉下地區仍需現金' },
      { id: 'credit-card', name: '信用卡', note: '玉山星宇世界卡。建議多帶一張他行卡片備用，並確認已開啟海外刷卡功能' },
      { id: 'booking-proof', name: '機票證明 / 住宿預訂證明', note: '存在手機或列印紙本備用' },
    ]
  },
  {
    id: 'driving',
    title: '自駕必備小物',
    emoji: '🚗',
    description: '提升駕駛體驗與安全 - 日本租車的配備不一定符合個人習慣，自己帶最保險。',
    items: [
      { id: 'phone-mount', name: '車用手機架', note: '夾冷氣出風口或吸盤式。日本租車不一定有適合的位置放手機看導航' },
      { id: 'car-charger', name: '車用充電器', note: '點菸器轉USB，自駕導航時手機充電必備' },
      { id: 'sunglasses', name: '太陽眼鏡', note: '重要！冬季陽光斜射及雪地反光強烈，開車時保護眼睛', important: true },
    ]
  },
  {
    id: 'electronics',
    title: '電子產品類',
    emoji: '📷',
    description: '拍攝主力 - 針對您的多樣設備，建議準備一個專門的收納包管理線材與電池。',
    items: [
      { id: 'camera', name: '相機/攝影機主機' },
      { id: 'dji-nano', name: 'DJI Osmo Nano' },
      { id: 'insta360', name: 'Insta360' },
      { id: 'dji-pocket3', name: 'DJI Pocket 3' },
      { id: 'batteries', name: '備用電池', note: '上述所有設備的電池，冬季耗電快，建議備足' },
      { id: 'memory-cards', name: '記憶卡', note: '建議多張備用，4K錄影容量需求大' },
      { id: 'power-bank', name: '行動電源 x2 (或更多)', note: '⚠️ 務必隨身登機。若要使用USB發熱外套，建議多備一顆專用，以免手機/相機沒電', important: true },
      { id: 'cables', name: '各式充電線', note: 'USB-C, Lightning 等，建議多帶幾條備用，包含車上及發熱外套要用的' },
      { id: 'usb-hub', name: '章魚頭 / 多孔USB充電器', note: '一次充手機、相機、行動電源' },
      { id: 'extension-cord', name: '延長線', note: '日本飯店插座有時較少或位置尷尬，這很實用' },
    ]
  },
  {
    id: 'clothing',
    title: '衣物類',
    emoji: '🧥',
    description: '冬季 1-10°C 洋蔥式穿搭術 - 日本室內暖氣很強，重點是「好穿脫」。進室內脫到剩薄長袖，出室外再全副武裝。',
    items: [
      { id: 'down-jacket', name: '羽絨外套 / 防風大衣', note: '建議具防潑水功能，應付小雨雪（外層 - 防風抗寒）' },
      { id: 'heated-jacket', name: 'USB 發熱外套', note: '戶外拍攝神器！請確認已準備好專用的行動電源隨身攜帶（外層 - 防風抗寒）' },
      { id: 'light-top', name: '輕薄長袖上衣 / 大學T / 薄毛衣', note: '進室內暖氣房後主要穿著（中層 - 保暖調節）' },
      { id: 'heat-tech', name: '發熱衣 / 發熱褲', note: '建議準備 3-4 套替換。貼身穿效果才好（內層 - 貼身發熱）' },
      { id: 'scarf', name: '圍巾', note: '脖子暖了身體就暖一半（配件 - 末梢保暖）' },
      { id: 'gloves', name: '手套', note: '強烈建議買可觸控螢幕的款式，方便拍照滑手機（配件 - 末梢保暖）' },
      { id: 'beanie', name: '毛帽', note: '遮耳款式佳（配件 - 末梢保暖）' },
      { id: 'warm-socks', name: '保暖厚襪', note: '建議含羊毛成分（配件 - 末梢保暖）' },
      { id: 'waterproof-shoes', name: '防水防風鞋子', note: '好走、防滑很重要，應付結霜地面（鞋類）' },
      { id: 'slippers', name: '拖鞋', note: '飯店內或長途飛機上使用（鞋類）' },
    ]
  },
  {
    id: 'skincare',
    title: '保濕與盥洗用品',
    emoji: '🧴',
    description: '對抗乾燥氣候 - 日本冬季非常乾燥，保濕比什麼都重要。',
    items: [
      { id: 'face-cream', name: '臉部乳液 / 面霜', note: '建議帶滋潤度高的' },
      { id: 'body-lotion', name: '身體乳液', note: '洗完澡後全身塗抹，防止乾癢' },
      { id: 'lip-balm', name: '護唇膏', note: '隨身攜帶，隨時補擦' },
      { id: 'hand-cream', name: '護手霜', note: '隨身攜帶，手很容易裂' },
      { id: 'toothbrush', name: '牙刷 & 牙膏', note: '日本飯店響應環保，有些已不主動提供一次性牙刷' },
      { id: 'dental-floss', name: '牙尖刷 / 牙線' },
    ]
  },
  {
    id: 'medicine',
    title: '常備藥品',
    emoji: '💊',
    description: '以備不時之需 - 建議保留藥品外盒或說明書，以便海關查驗或就醫時說明。',
    items: [
      { id: 'cold-medicine', name: '感冒藥', note: '綜合感冒症狀' },
      { id: 'stomach-medicine', name: '腸胃藥', note: '止瀉藥、胃藥/胃散，適應水土不服或大餐後不適' },
      { id: 'painkiller', name: '止痛藥', note: '頭痛、生理痛、解熱鎮痛' },
      { id: 'anti-inflammatory', name: '消炎藥' },
      { id: 'cough-medicine', name: '咳嗽藥 / 喉糖', note: '空氣乾冷容易喉嚨癢' },
      { id: 'skin-ointment', name: '皮膚過敏藥膏', note: '對抗乾癢或突發過敏' },
      { id: 'antihistamine', name: '口服抗組織胺', note: '過敏用' },
      { id: 'bandaid', name: 'OK繃 / 簡易外傷藥' },
    ]
  },
  {
    id: 'misc',
    title: '其他雜項',
    emoji: '👜',
    description: '提升旅行品質',
    items: [
      { id: 'umbrella', name: '摺疊傘', note: '日本天氣多變，輕便為主' },
      { id: 'shopping-bag', name: '購物袋', note: '環保袋，日本商店塑膠袋多需付費' },
      { id: 'compression-bag', name: '壓縮袋', note: '回程裝髒衣服，騰出空間裝戰利品的神器' },
      { id: 'small-bag', name: '隨身小包', note: '裝護照、錢包、手機，方便活動' },
      { id: 'wet-wipes', name: '酒精棉片/濕紙巾' },
    ]
  },
];
