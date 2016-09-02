import {
  StyleSheet
} from 'react-native';

import {
  colors
} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.whiteSmoke,
    marginTop: 64
  },
  applyView: {
    margin: 7
  },
  filtersView: {
    margin: 5
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  applyViewCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey87,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  applySavedCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  applyViewCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  clearAllCell: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey87,
    backgroundColor: 'white'
  },
  filterViewCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey87,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 2,
    backgroundColor: 'white'
  },
  filterViewCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  clearCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 16,
    color: colors.darkSlateGray,
  },
  applySavedCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkSlateGray,
  },
  applyCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkOrange,
  },
  filterCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkSlateGray,
  },
  discloser: {
    height: 20,
    width: 20
  },
  applyButton: {
    margin: 5,
    height: 35,
    width: 110,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    backgroundColor: colors.lightSeaGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonCaption: {
    color: 'white'
  },
  resetButton: {
    margin: 5
  }
});
