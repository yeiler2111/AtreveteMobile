import React from 'react';
import { BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

const adUnitId = 'ca-app-pub-2284145159855511/9494554205';

export function BannerGame() {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        networkExtras: {
          collapsible: 'bottom',
        },
      }}
    />
  );
}
