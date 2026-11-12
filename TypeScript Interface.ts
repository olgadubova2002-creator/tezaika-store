// types/seasonal.ts
export type SeasonalThemeType = 'NONE' | 'AUTUMN_SEPTEMBER' | 'WINTER_NEW_YEAR' | 'SPRING_MARCH' | 'SUMMER';

export interface SeasonalSettings {
  // 1. Визуальные эффекты
  theme: SeasonalThemeType;
  effectIntensity: 'LOW' | 'MEDIUM' | 'HIGH';
  showMascotSeasonalCostume: boolean; // Лисичка в колпаке/шарфике
  
  // 2. Акционные баннеры
  promoActive: boolean;
  promoTitle: string;
  promoSubtitle: string;
  promoCode: string;
  promoDiscountText: string; // Например: "-25% НА ВСЁ"
  promoEndDate: string; // ISO дата для обратного отсчета
  
  // Места показа баннера
  displayOnTopBar: boolean;        // Бегущая/липкая строка над хедером
  displayOnHero: boolean;          // Большой баннер на главной
  displayOnProductCards: boolean;  // Ленточка/бейдж акции на всех карточках
  bannerImageUrl?: string;
}