
export const selectCars = (state) => state.cars.cars;
export const selectCatalog = (state) => state.cars.catalog;
export const selectLoading = (state) => state.cars.isDataLoading;
export const selectFilters = (state) => state.cars.global_filter;
export const carOptions = (state) => state.cars.car_options;
export const selectFilteredCar = (state) => state.cars.filtered_car;
export const selectSearchResult = (state) => state.cars.search_result;
export const selectBrandList = (state) => state.cars.brand_list;
export const selectContact = (state) => state.cars.contact;