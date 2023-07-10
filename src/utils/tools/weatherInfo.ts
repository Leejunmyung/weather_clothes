export const weatherInfo = {
  fineDustJudge(pm: number | undefined) {
    if (pm === undefined) return;
    switch (true) {
      case pm < 30:
        return '좋음';
      case pm > 30:
        return '보통';
      case pm > 80:
        return '나쁨';
      // case pm > 150:
      //   return '매우나쁨';
      default:
    }
  },
  ultraFineDustJudge(ulpm: number | undefined) {
    if (ulpm === undefined) return;
    switch (true) {
      case ulpm < 15:
        return '좋음';
      case ulpm > 15:
        return '보통';
      case ulpm > 35:
        return '나쁨';
      // case ulpm > 75:
      //   return '매우나쁨';
      default:
    }
  },
  weatherImageJudge(weather: string | undefined) {
    if (weather === undefined) return;
    switch (weather) {
      case 'Clear':
        return 'img/weather/Clear.png';
      case 'Clouds':
        return 'img/weather/Clouds.png';
      case 'Thunderstorm':
        return 'img/weather/Thunderstorm.png';
      case 'Snow':
        return 'img/weather/Snow.png';
      case 'Rain':
        return 'img/weather/Rain.png';
      case 'Drizzle':
        return 'img/weather/Drizzle.png';
      case 'Mist' || 'Haze' || 'Fog' || 'Smoke':
        return 'img/weather/Mist.png';
      case 'Dust' || 'Ash' || 'Sand':
        return 'img/weather/Dust.png';
      case 'Squall':
        return 'img/weather/Squall.png';
      case 'Tornado':
        return 'img/weather/Tornado.png';
      default:
        return 'img/weather/Clear.png';
    }
  },
  weatherBackgroundJudge(weather: string | undefined) {
    if (weather === undefined) return;
    switch (weather) {
      case 'Clouds' || 'Rain' || 'Thunderstorm' || 'Tornado' || 'Squall' || 'Snow':
        return '#646C78';
      case 'Clear':
        return '#fff7b1';
      case 'Dust' || 'Ash' || 'Sand':
        return '#B9A894';
      case 'Mist' || 'Haze' || 'Fog' || 'Smoke':
        return '#9D9DA3';
      default:
        return '#fff7b1';
    }
  },
};
