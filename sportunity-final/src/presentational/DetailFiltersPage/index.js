import React from 'react';

import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import MultiSlider from 'react-native-multi-slider';
import Calendar from 'react-native-day-picker';
import styles from './style';
import { images, colors, metrics } from '../../theme';
/*
 * ViewCell template for such as My tennis, Looking1 on Design
 */
const ApplyViewCell = (props) => (
  <TouchableHighlight style={styles.applyViewCell}>
    <View style={styles.applyViewCellContext}>
      <Text style={styles.applyCellCaption}>{props.caption}</Text>
      <Image style={styles.discloser} source={images.close} />
    </View>
  </TouchableHighlight>
);

ApplyViewCell.propTypes = {
  caption: React.PropTypes.string
};

const DetailFiltersPage = (props) => {
  const from = new Date();
  from.setDate(from.getDate() - 16);
  const to = new Date();
  let startDate = new Date();
  startDate.setMonth(startDate.getMonth() + 1);
  return (
    <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
      <View style={styles.applyView}>
        <TouchableHighlight style={styles.clearAllCell}>
          <View style={styles.applySavedCellContext}>
            <Text style={styles.applySavedCellCaption}>Sports</Text>
            <Image style={styles.discloser} source={images.expand_arrow} />
          </View>
        </TouchableHighlight>
        <ApplyViewCell caption="Beach volleyball" />
        <ApplyViewCell caption="Basketball" />
        <ApplyViewCell caption="Tennis" />
        <View style={styles.clearAllCell}>
          <TouchableHighlight style={styles.clearLeft}>
            <Text style={styles.clearCellCaption}>CLEAR ALL</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.clearRight}>
            <Text style={styles.clearCellCaption}>ADD</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.applyView}>
        <TouchableHighlight style={styles.clearAllCell}>
          <View style={styles.applySavedCellContext}>
            <Text style={styles.applySavedCellCaption}>Places</Text>
            <Image style={styles.discloser} source={images.expand_arrow} />
          </View>
        </TouchableHighlight>
        <View style={styles.placeContextView}>
          <View style={styles.placeContextClose}>
            <TouchableHighlight>
              <Image style={styles.discloser} source={images.close} />
            </TouchableHighlight>
          </View>
          <View style={styles.locationContext}>
            <Text>Route des Plaines-du-Loup 7, 1018 Lausanne</Text>
          </View>
          <View style={styles.aroundContext}>
            <View style={styles.leftContext}>
              <TouchableHighlight style={styles.aroundBtn} onPress={props.onPressDecAround}>
                <Text style={styles.plusMinusBtn}>-</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.aroundLabel}>
              <Text style={styles.aroundLabelText}>Around</Text>
            </View>
            <View style={styles.aroundValue}>
              <Text style={styles.aroundValueText}>{props.aroundOfPlace}</Text>
            </View>
            <View style={styles.aroundLabel}>
              <Text style={styles.aroundLabelText}>km</Text>
            </View>
            <View style={styles.rightContext}>
              <TouchableHighlight style={styles.aroundBtn} onPress={props.onPressIncAround}>
                <Text style={styles.plusMinusBtn}>+</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.clearAllCell}>
          <TouchableHighlight style={styles.clearLeft}>
            <Text style={styles.clearCellCaption}>CLEAR ALL</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.clearRight}>
            <Text style={styles.clearCellCaption}>ADD</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.applyView}>
        <TouchableHighlight style={styles.clearAllCell}>
          <View style={styles.applySavedCellContext}>
            <Text style={styles.applySavedCellCaption}>Dates</Text>
            <Image style={styles.discloser} source={images.expand_arrow} />
          </View>
        </TouchableHighlight>
        <View style={styles.datesFromToView}>
          <View style={styles.datesFromView}>
            <View style={styles.datesFromTopView}>
              <Text style={styles.fromLabel}>From</Text>
            </View>
            <View style={styles.datesFromBottomView}>
              <Text style={styles.fromValue}>Mon</Text>
              <Text style={styles.fromValue}>16 May 2016</Text>
            </View>
          </View>
          <View style={styles.datesToView}>
            <View style={styles.datesFromTopView}>
              <Text style={styles.fromLabel}>To</Text>
            </View>
            <View style={styles.datesFromBottomView}>
              <Text style={styles.fromValue}>Mon</Text>
              <Text style={styles.fromValue}>3 June 2016</Text>
            </View>
          </View>
        </View>
        <View style={styles.datePicker}>
          <ScrollView>
            <Calendar
              monthCount={12}
              startFromMonday={Boolean(true)}
              startDate={startDate}
              selectFrom={from}
              selectTo={to}
              width={metrics.screenWidth - 80}
            />
          </ScrollView>
        </View>
        <View style={styles.clearAllCell}>
          <TouchableHighlight style={styles.clearLeft}>
            <Text style={styles.clearCellCaption}>CLEAR ALL</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.applyView}>
        <TouchableHighlight style={styles.clearAllCell}>
          <View style={styles.applySavedCellContext}>
            <Text style={styles.applySavedCellCaption}>Hours</Text>
            <Image style={styles.discloser} source={images.expand_arrow} />
          </View>
        </TouchableHighlight>
        <View style={styles.hoursView}>
          <View style={styles.hoursValue}>
            <View style={styles.hoursMinValue}>
              <Text style={styles.fromValue}>{props.minHour}</Text>
            </View>
            <View style={styles.hoursMaxValue}>
              <Text style={styles.fromValue}>{props.maxHour}</Text>
            </View>
            <View style={styles.hoursCloseValue}>
              <Image style={styles.discloser} source={images.close} />
            </View>
          </View>
          <View style={styles.multiSlider}>
            <MultiSlider
              selectedStyle={{
                backgroundColor: colors.darkOrange
              }}
              unselectedStyle={{
                backgroundColor: colors.darkSeaGreen
              }}
              containerStyle={{
                height: 40,
              }}
              trackStyle={{
                height: 3
              }}
              min={0}
              max={24}
              markerStyle={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: colors.darkOrange,
                borderWidth: 0.5,
                borderColor: colors.darkOrange
              }}
              pressedMarkerStyle={{
                backgroundColor: colors.darkOrange
              }}
              values={props.rangeHour}
              sliderLength={metrics.screenWidth - 80}
              onValuesChange={props.onHourChange}
            />
          </View>
        </View>
        <View style={styles.clearAllCell}>
          <TouchableHighlight style={styles.clearLeft}>
            <Text style={styles.clearCellCaption}>CLEAR ALL</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.applyView}>
        <TouchableHighlight style={styles.clearAllCell}>
          <View style={styles.applySavedCellContext}>
            <Text style={styles.applySavedCellCaption}>Price</Text>
            <Image style={styles.discloser} source={images.expand_arrow} />
          </View>
        </TouchableHighlight>
        <View style={styles.hoursView}>
          <View style={styles.hoursValue}>
            <View style={styles.priceMinValue}>
              <Text style={styles.fromValue}>{props.minPrice}</Text>
            </View>
            <View style={styles.priceMaxValue}>
              <Text style={styles.fromValue}>{props.maxPrice}</Text>
            </View>
          </View>
          <View style={styles.multiSlider}>
            <MultiSlider
              selectedStyle={{
                backgroundColor: colors.darkOrange
              }}
              unselectedStyle={{
                backgroundColor: colors.darkSeaGreen
              }}
              containerStyle={{
                height: 40,
              }}
              trackStyle={{
                height: 3
              }}
              min={0}
              max={1000}
              markerStyle={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: colors.darkOrange,
                borderWidth: 0.5,
                borderColor: colors.darkOrange
              }}
              pressedMarkerStyle={{
                backgroundColor: colors.darkOrange
              }}
              sliderLength={metrics.screenWidth - 80}
              values={props.rangePrice}
              onValuesChange={props.onPriceChange}
            />
          </View>
        </View>
        <View style={styles.clearAllCell}>
          <TouchableHighlight style={styles.clearLeft}>
            <Text style={styles.clearCellCaption}>CLEAR</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.applyButton}>
          <Text style={styles.applyButtonCaption}>APPLY</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.applyButton}>
          <Text style={styles.applyButtonCaption}>RESET</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};
DetailFiltersPage.propTypes = {
  onPressIncAround: React.PropTypes.func.isRequired,
  onPressDecAround: React.PropTypes.func.isRequired,
  onHourChange: React.PropTypes.func.isRequired,
  onPriceChange: React.PropTypes.func.isRequired,
  aroundOfPlace: React.PropTypes.number,
  minHour: React.PropTypes.number,
  maxHour: React.PropTypes.number,
  minPrice: React.PropTypes.number,
  maxPrice: React.PropTypes.number,
  rangeHour: React.PropTypes.array,
  rangePrice: React.PropTypes.array
};

export default DetailFiltersPage;
