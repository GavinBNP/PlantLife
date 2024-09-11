import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Padding,
  Color,
  Border,
  StyleVariable,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const Frame7 = () => {
  return (
    <View style={styles.view}>
      <LinearGradient
        style={[styles.child, styles.itemLayout1]}
        locations={[0, 1]}
        colors={["rgba(184, 217, 121, 0.88)", "rgba(167, 255, 0, 0.56)"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.mediaIconWrapper, styles.mediaIconShadowBox]}>
        <Image
          style={styles.mediaIcon}
          resizeMode="cover"
          source={require("../assets/media--icon.png")}
        />
      </View>
      <View style={[styles.mediaIconContainer, styles.mediaIconShadowBox]}>
        <Image
          style={styles.mediaIcon}
          resizeMode="cover"
          source={require("../assets/media--icon1.png")}
        />
      </View>
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.frameParent, styles.rowFlexBox]}>
        <View style={[styles.homeWrapper, styles.homeWrapperFlexBox]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
        </View>
        <View style={styles.iconFlexBox}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={[styles.iconContainer, styles.iconFlexBox]}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <View style={styles.iconFlexBox}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
      <Text style={[styles.airTemp, styles.cClr]}>Air Temp</Text>
      <View style={[styles.graph, styles.graphPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.cParent}>
            <Text style={[styles.c, styles.cClr]}>
              <Text style={styles.text}>42</Text>
              <Text style={styles.text1}>{`  `}</Text>
              <Text style={styles.c1}>°C</Text>
            </Text>
            <Text
              style={styles.reportOnYour}
            >{`Report on your air temp `}</Text>
          </View>
          <View style={[styles.hoursParent, styles.homeWrapperFlexBox]}>
            <Text style={styles.hours}>Hours</Text>
            <Image
              style={styles.leftArrow4Icon}
              resizeMode="cover"
              source={require("../assets/left-arrow-4.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.otherReport, styles.cClr]}>Other Report</Text>
      <View style={[styles.menuItemParent, styles.graphPosition]}>
        <View style={[styles.menuItem, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-down.png")}
          />
          <View style={styles.body}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label, styles.labelClr]}>Water pH</Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.aTypo]}>155 PPM</Text>
          </View>
        </View>
        <View style={[styles.menuItem1, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-down.png")}
          />
          <View style={styles.body}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label, styles.labelClr]}>Water Ppm</Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.aTypo]}>155 PPM</Text>
          </View>
        </View>
        <View style={[styles.menuItem2, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-down.png")}
          />
          <View style={styles.body}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label2, styles.aTypo]}>
                Water Temperature
              </Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.aTypo]}>155 PPM</Text>
          </View>
        </View>
        <View style={[styles.menuItem3, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-down.png")}
          />
          <View style={styles.body}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label2, styles.aTypo]}>Water Level</Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.aTypo]}>155 PPM</Text>
          </View>
        </View>
        <View style={[styles.menuItem4, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-down.png")}
          />
          <View style={styles.body}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label2, styles.aTypo]}>Light Intensity</Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.aTypo]}>155 PPM</Text>
          </View>
        </View>
        <View style={[styles.menuSeparator, styles.menuSpaceBlock]}>
          <View style={styles.rule} />
        </View>
        <View style={[styles.menuSeparator1, styles.menuSpaceBlock]}>
          <View style={styles.rule} />
        </View>
        <View style={[styles.menuSeparator2, styles.menuSpaceBlock]}>
          <View style={styles.rule} />
        </View>
        <View style={[styles.menuSeparator3, styles.menuSpaceBlock]}>
          <View style={styles.rule} />
        </View>
        <View style={[styles.menuSeparator4, styles.menuSpaceBlock]}>
          <View style={styles.rule} />
        </View>
      </View>
      <View style={[styles.graph1, styles.graph1Layout]}>
        <View style={[styles.octParent, styles.graph1Layout]}>
          <Text style={[styles.oct, styles.octLayout]}>01.00</Text>
          <Text style={[styles.nov, styles.novLayout]}>02.00</Text>
          <Text style={[styles.dec, styles.novLayout]}>03.00</Text>
          <Text style={[styles.feb, styles.novLayout]}>05.00</Text>
          <Text style={[styles.mar, styles.marTypo]}>06.00</Text>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.jan, styles.marTypo]}>04.00</Text>
          </View>
        </View>
        <Image
          style={styles.graphIcon}
          resizeMode="cover"
          source={require("../assets/graph.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout1: {
    width: 369,
    position: "absolute",
  },
  mediaIconShadowBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_4xs,
    height: 32,
    width: 32,
    backgroundColor: Color.colorGray_400,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    top: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    position: "absolute",
    overflow: "hidden",
  },
  itemLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.backgroundDefaultDefault,
  },
  rowFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  homeWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconFlexBox: {
    marginLeft: -1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  cClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  graphPosition: {
    width: 306,
    left: 32,
    position: "absolute",
  },
  menuItemSpaceBlock: {
    gap: StyleVariable.space300,
    paddingVertical: StyleVariable.space300,
    paddingHorizontal: StyleVariable.space400,
    borderRadius: StyleVariable.radiusMd,
    width: 306,
    left: 0,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  labelClr: {
    color: Color.textDefaultDefault,
    fontSize: FontSize.singleLineBodyBase_size,
  },
  aTypo: {
    fontFamily: FontFamily.singleLineBodyBase,
    textAlign: "left",
  },
  menuSpaceBlock: {
    paddingVertical: StyleVariable.paddingSm,
    paddingHorizontal: StyleVariable.paddingLg,
    width: 284,
    left: 11,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  graph1Layout: {
    width: 283,
    position: "absolute",
  },
  octLayout: {
    height: 14,
    color: Color.colorDarkgray_100,
  },
  novLayout: {
    width: 33,
    height: 14,
    color: Color.colorDarkgray_100,
    lineHeight: 15,
    fontFamily: FontFamily.sFProText,
    top: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  marTypo: {
    width: 34,
    lineHeight: 15,
    fontFamily: FontFamily.sFProText,
    top: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 15,
    width: 41,
    position: "absolute",
  },
  child: {
    top: -30,
    left: -1,
    borderRadius: Border.br_11xl,
    height: 538,
    backgroundColor: "transparent",
  },
  mediaIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mediaIconWrapper: {
    left: 24,
  },
  mediaIconContainer: {
    left: 318,
  },
  item: {
    top: 324,
    height: 468,
    backgroundColor: Color.backgroundDefaultDefault,
    left: 0,
    width: 369,
    position: "absolute",
  },
  homeIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  homeWrapper: {
    alignSelf: "stretch",
    backgroundColor: Color.backgroundDefaultDefault,
    flex: 1,
  },
  icon: {
    width: 19,
    height: 16,
  },
  icon1: {
    width: 13,
    height: 18,
  },
  iconContainer: {
    backgroundColor: Color.colorYellowgreen_200,
  },
  frameParent: {
    top: 748,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 1,
    height: 46,
    backgroundColor: Color.backgroundDefaultDefault,
    left: 0,
    width: 369,
    position: "absolute",
  },
  airTemp: {
    top: 90,
    fontSize: FontSize.size_21xl,
    width: 172,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.proximaNova,
    fontWeight: "700",
    color: Color.colorBlack,
    left: 32,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_13xl,
  },
  text1: {
    fontSize: FontSize.size_smi,
  },
  c1: {
    fontSize: FontSize.singleLineBodyBase_size,
  },
  c: {
    textAlign: "left",
    fontFamily: FontFamily.proximaNova,
    fontWeight: "700",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  reportOnYour: {
    fontFamily: FontFamily.inderRegular,
    color: Color.colorGray_100,
    lineHeight: 16,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    alignSelf: "stretch",
  },
  cParent: {
    flex: 1,
  },
  hours: {
    color: Color.backgroundDefaultDefault,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.proximaNova,
    fontWeight: "700",
  },
  leftArrow4Icon: {
    width: 8,
    height: 5,
  },
  hoursParent: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_xs,
    backgroundColor: Color.colorYellowgreen_100,
    overflow: "hidden",
  },
  frameGroup: {
    top: 11,
    left: 20,
    width: 274,
    height: 45,
    gap: Gap.gap_sm,
    flexDirection: "row",
    position: "absolute",
  },
  graph: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 310,
    top: 138,
    backgroundColor: Color.backgroundDefaultDefault,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    width: 306,
  },
  otherReport: {
    top: 468,
    left: 31,
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 131,
    height: 26,
    textAlign: "left",
    position: "absolute",
  },
  label: {
    fontFamily: FontFamily.sFProText,
    color: Color.textDefaultDefault,
    lineHeight: 22,
    textAlign: "left",
    flex: 1,
  },
  a: {
    color: Color.textDefaultDefault,
    fontSize: FontSize.singleLineBodyBase_size,
    lineHeight: 16,
  },
  menuShortcut: {
    justifyContent: "flex-end",
    borderRadius: Border.br_5xs,
  },
  row: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  description: {
    fontSize: FontSize.bodySmall_size,
    lineHeight: 20,
    color: Color.textDefaultSecondary,
    display: "none",
    alignSelf: "stretch",
  },
  body: {
    gap: StyleVariable.space100,
    flex: 1,
  },
  menuItem: {
    top: 0,
  },
  menuItem1: {
    top: 46,
  },
  label2: {
    color: Color.textDefaultDefault,
    fontSize: FontSize.singleLineBodyBase_size,
    lineHeight: 22,
    fontFamily: FontFamily.singleLineBodyBase,
    flex: 1,
  },
  menuItem2: {
    top: 92,
  },
  menuItem3: {
    top: 138,
  },
  menuItem4: {
    top: 184,
  },
  rule: {
    backgroundColor: Color.borderDefaultDefault,
    height: 1,
    alignSelf: "stretch",
  },
  menuSeparator: {
    top: 37,
  },
  menuSeparator1: {
    top: 83,
  },
  menuSeparator2: {
    top: 129,
  },
  menuSeparator3: {
    top: 175,
  },
  menuSeparator4: {
    top: 221,
  },
  menuItemParent: {
    top: 505,
    height: 238,
  },
  oct: {
    lineHeight: 15,
    height: 14,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.sFProText,
    top: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    width: 32,
    position: "absolute",
  },
  nov: {
    left: 48,
  },
  dec: {
    left: 99,
  },
  feb: {
    left: 199,
  },
  mar: {
    left: 249,
    height: 14,
    color: Color.colorDarkgray_100,
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    top: 0,
    backgroundColor: Color.colorYellowgreen_100,
    left: 0,
  },
  jan: {
    left: 4,
    color: Color.backgroundDefaultDefault,
  },
  rectangleParent: {
    top: 1,
    left: 145,
  },
  octParent: {
    top: 187,
    height: 16,
    left: 0,
  },
  graphIcon: {
    width: 280,
    height: 170,
    top: 0,
    left: 0,
    position: "absolute",
  },
  graph1: {
    top: 231,
    left: 44,
    height: 203,
  },
  view: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_500,
    width: "100%",
    height: 792,
    overflow: "hidden",
    flex: 1,
  },
});

export default Frame7;
