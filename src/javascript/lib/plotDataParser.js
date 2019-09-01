export const parseRaitings = ({ included }) => {
  //1. Определяем список доступных стран
  const avaliablesCountries = [];
  included.forEach(element => {
    if (!avaliablesCountries.includes(element.attributes.Country)) avaliablesCountries.push(element.attributes.Country);
  });
  //2. Заполняем рейтинги для всех стран
  const ratings = [];
  avaliablesCountries.forEach(country => {
    let ratings_per_countries = [];
    included.forEach(element_per_date => {
      if (element_per_date.type == 'Rating' && element_per_date.attributes.Country == country)
        ratings_per_countries.push(element_per_date.attributes);
    });

    // Сортируем
    ratings_per_countries = ratings_per_countries.sort(function (a, b) {
      if (a.Date > b.Date) {
        return 1;
      }
      if (a.Date < b.Date) {
        return -1;
      }
      return 0;
    });
    ratings.push(ratings_per_countries);
  });

  return { ratings: ratings, countries: avaliablesCountries };
};

function getMinMaxFromData({ countryIndex, parsedData, storeType, starCount }) {
  let min,
    max,
    current = null;
  parsedData.ratings[countryIndex].forEach(app_ratings => {
    // Находим процентное соотношение
    var sum =
      app_ratings.Rating1 + app_ratings.Rating2 + app_ratings.Rating3 + app_ratings.Rating4 + app_ratings.Rating5;
    var one_per = 100.0 / sum;
    var challenger = app_ratings[`Rating${starCount}`] * one_per;
    if (app_ratings.ShopType == storeType) {
      if (min) {
        if (min.value > challenger) {
          min = { value: challenger, date: app_ratings.Date };
        }
      } else {
        min = { value: challenger, date: app_ratings.Date };
      }
      if (max) {
        if (max.value < challenger) {
          max = { value: challenger, date: app_ratings.Date };
        }
      } else {
        max = { value: challenger, date: app_ratings.Date };
      }
      current = { value: challenger, date: app_ratings.Date };
    }
  });

  return { min: min, max: max, current: current };
}

export const loadMinMaxCurrent = ({ countryIndex, parsedData, storeType }) => {
  const data = [];

  [5, 4, 3, 2, 1].forEach(starCount => {
    data.push(getMinMaxFromData({ countryIndex, parsedData, storeType, starCount }));
  });

  return data;
};

export const dataForPlotTy1 = ({ countryIndex, parsedData, storeType }) => {
  const data = [];
  [5, 4, 3, 2, 1].forEach(stars_count => {
    const star_data = [];
    const star_date = [];
    parsedData.ratings[countryIndex].forEach(ratings => {
      if (ratings.ShopType == storeType) {
        star_data.push(ratings[`Rating${stars_count}`]);
        star_date.push(ratings.Date);
      }
    });
    data.push({ x: star_date, y: star_data });
  });
  return data;
};

export const dataForNewPlotTy = (countryIndex, parsedData, storeType) => {
  const data = [];
  [5, 4, 3, 2, 1].forEach(stars_count => {
    const star_data = [];
    const star_date = [];
    parsedData.ratings[countryIndex].forEach(ratings => {
      if (ratings.ShopType == storeType) {
        star_data.push(ratings[`Rating${stars_count}`]);
        star_date.push(ratings.Date);
      }
    });
    data.push({ x: star_date, y: star_data });
  });
  return data;

};
export const dataForPieBarPlotTy = (countryIndex, parsedData, storeType) => {
  const data = [];
  [5, 4, 3, 2, 1].forEach(stars_count => {
    let star_data;
    let star_date;
    parsedData.ratings[countryIndex].forEach(ratings => {
      if (ratings.ShopType == storeType) {
        star_data = ratings[`Rating${stars_count}`];
        star_date = ratings.Date;
      }
    });
    data.push({ x: star_date, y: star_data });
  });
  return data;
};

export const testLoad = (response) => {
  window.globalAppData = response.data;
  var dynamicInfos = [];
  var ratings = [];
  for (var i = 0; i < window.globalAppData.included.length; i++) {
    if (window.globalAppData.included[i].type == 'DynamicInfo')
      dynamicInfos.push(window.globalAppData.included[i].attributes);
    if (window.globalAppData.included[i].type == 'Rating') ratings.push(window.globalAppData.included[i].attributes);
  }
  window.applicationData = response.data.data.attributes;
  window.dynamicInfos = dynamicInfos;
  window.ratings = ratings.sort(function (a, b) {
    if (a.Date > b.Date) {
      return 1;
    }
    if (a.Date < b.Date) {
      return -1;
    }
    return 0;
  });
}