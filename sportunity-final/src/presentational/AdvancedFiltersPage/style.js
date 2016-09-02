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
  genderView: {
    flex: 1,
    margin: 7
  },
  emptyView: {
    flex: 3,
    margin: 5
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  genderViewCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey87,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  genderViewCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  genderViewHeader: {
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
  genderHeaderCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 16,
    color: colors.darkSlateGray,
  },
  genderCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkIvory,
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
  clearButton: {
    margin: 5,
    height: 35,
    width: 110,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.lightSeaGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonCaption: {
    color: colors.lightSeaGreen
  },
  applyButtonCaption: {
    color: 'white'
  },
  resetButton: {
    margin: 5
  }
});
