import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Frame8 = () => {
  return (
    <View style={styles.view}>
      <LinearGradient
        style={[styles.child, styles.itemLayout1]}
        locations={[0, 1]}
        colors={["rgba(184, 217, 121, 0.88)", "rgba(167, 255, 0, 0.56)"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.frameParent, styles.rowFlexBox]}>
        <View style={[styles.homeWrapper, styles.wrapperFlexBox]}>
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
      <Text style={[styles.sensorReport, styles.sensorReportTypo]}>
        Sensor Report
      </Text>
      <Text style={[styles.autoActionConfiguration, styles.sensorReportTypo]}>
        Auto Action Configuration
      </Text>
      <View style={styles.menuItemParent}>
        <View style={[styles.menuItem, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-down.png")}
          />
          <View style={[styles.body, styles.bodyFlexBox]}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label, styles.labelLayout]}>Water pH</Text>
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
          <View style={styles.bodyFlexBox}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label, styles.labelLayout]}>Water Ppm</Text>
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
          <View style={styles.bodyFlexBox}>
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
          <View style={styles.bodyFlexBox}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label2, styles.aTypo]}>Air Temperature</Text>
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
          <View style={styles.bodyFlexBox}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label2, styles.aTypo]}>Water Level</Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.aTypo]}>155 PPM</Text>
          </View>
        </View>
        <View style={[styles.menuItem5, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-down.png")}
          />
          <View style={styles.bodyFlexBox}>
            <View style={[styles.row, styles.rowFlexBox]}>
              <Text style={[styles.label2, styles.aTypo]}>Light Intensity</Text>
              <View style={[styles.menuShortcut, styles.rowFlexBox]}>
                <Text style={[styles.a, styles.aTypo]}>⇧A</Text>
              </View>
            </View>
            <Text style={[styles.description, styles.aTypo]}>155 PPM</Text>
          </View>
        </View>
      </View>
      <View style={[styles.monthlyDueBy, styles.monthlyLayout2]}>
        <Text style={[styles.monthlyDueBy1, styles.monthlyLayout]}>
          TDS Low
        </Text>
        <View style={[styles.monthlyDueByInner, styles.parentLayout]}>
          <View style={[styles.parent, styles.parentLayout]}>
            <Text style={[styles.text, styles.monthlyLayout]}>2000</Text>
            <Image
              style={[styles.groupChild, styles.parentLayout]}
              resizeMode="cover"
              source={require("../assets/vector-107.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.monthlyDueBy2, styles.monthlyLayout2]}>
        <Text style={[styles.monthlyDueBy1, styles.monthlyLayout]}>
          TDS High
        </Text>
        <View style={[styles.monthlyDueByInner, styles.parentLayout]}>
          <View style={[styles.parent, styles.parentLayout]}>
            <Text style={[styles.text, styles.monthlyLayout]}>2000</Text>
            <Image
              style={[styles.groupChild, styles.parentLayout]}
              resizeMode="cover"
              source={require("../assets/vector-107.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.monthlyDueBy4, styles.monthlyLayout2]}>
        <Text style={[styles.monthlyDueBy5, styles.monthlyLayout]}>
          Checking Schedule
        </Text>
        <View style={[styles.monthlyDueByInner, styles.parentLayout]}>
          <View style={[styles.parent, styles.parentLayout]}>
            <Text style={[styles.text, styles.monthlyLayout]}>2000</Text>
            <Image
              style={[styles.groupChild, styles.parentLayout]}
              resizeMode="cover"
              source={require("../assets/vector-1071.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonBorder]}>
        <Image
          style={styles.starIcon}
          resizeMode="cover"
          source={require("../assets/star5.png")}
        />
        <Text style={[styles.button1, styles.aTypo]}>Cancel</Text>
        <Image
          style={styles.starIcon}
          resizeMode="cover"
          source={require("../assets/x5.png")}
        />
      </View>
      <View style={[styles.button2, styles.buttonBorder]}>
        <Image
          style={styles.starIcon}
          resizeMode="cover"
          source={require("../assets/star6.png")}
        />
        <Text style={[styles.a, styles.aTypo]}>Save</Text>
        <Image
          style={styles.starIcon}
          resizeMode="cover"
          source={require("../assets/x6.png")}
        />
      </View>
      <Text style={[styles.ponikpintar, styles.hitam3IconPosition]}>
        PonikPintar
      </Text>
      <Image
        style={[styles.hitam3Icon, styles.hitam3IconPosition]}
        resizeMode="cover"
        source={require("../assets/hitam-1.png")}
      />
      <View style={[styles.settingsWrapper, styles.wrapperFlexBox]}>
        <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={require("../assets/settings.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout1: {
    width: 369,
    left: -1,
  },
  itemLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rowFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconFlexBox: {
    marginLeft: -1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  sensorReportTypo: {
    height: 26,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    left: 31,
    textAlign: "left",
    position: "absolute",
  },
  menuItemSpaceBlock: {
    gap: StyleVariable.space300,
    paddingVertical: StyleVariable.space300,
    paddingHorizontal: StyleVariable.space400,
    borderRadius: StyleVariable.radiusMd,
    width: 306,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bodyFlexBox: {
    gap: StyleVariable.space100,
    flex: 1,
  },
  labelLayout: {
    lineHeight: 22,
    color: Color.textDefaultDefault,
    fontSize: FontSize.singleLineBodyBase_size,
    flex: 1,
  },
  aTypo: {
    fontFamily: FontFamily.singleLineBodyBase,
    textAlign: "left",
  },
  monthlyLayout2: {
    height: 22,
    width: 280,
    left: 58,
    position: "absolute",
  },
  monthlyLayout: {
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  parentLayout: {
    width: 69,
    position: "absolute",
  },
  buttonBorder: {
    gap: StyleVariable.space200,
    padding: StyleVariable.space200,
    borderWidth: 1,
    borderRadius: StyleVariable.radius200,
    top: 640,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  hitam3IconPosition: {
    top: 34,
    position: "absolute",
  },
  child: {
    top: -30,
    borderRadius: Border.br_11xl,
    height: 538,
    backgroundColor: "transparent",
    position: "absolute",
    left: -1,
  },
  item: {
    top: 83,
    height: 1113,
    backgroundColor: Color.backgroundDefaultDefault,
    width: 369,
    left: -1,
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
    top: 746,
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 1,
    height: 46,
    borderStyle: "solid",
    flexDirection: "row",
    left: 0,
    backgroundColor: Color.backgroundDefaultDefault,
    width: 369,
    position: "absolute",
  },
  sensorReport: {
    top: 102,
    width: 131,
  },
  autoActionConfiguration: {
    top: 455,
    width: 250,
  },
  label: {
    fontFamily: FontFamily.sFProText,
    color: Color.textDefaultDefault,
    textAlign: "left",
    lineHeight: 22,
  },
  a: {
    lineHeight: 16,
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.singleLineBodyBase_size,
    color: Color.textDefaultDefault,
  },
  menuShortcut: {
    borderRadius: Border.br_5xs,
    justifyContent: "flex-end",
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
    overflow: "hidden",
  },
  menuItem: {
    top: 0,
  },
  menuItem1: {
    top: 46,
  },
  label2: {
    color: Color.textDefaultDefault,
    lineHeight: 22,
    fontSize: FontSize.singleLineBodyBase_size,
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
  menuItem5: {
    top: 230,
  },
  menuItemParent: {
    top: 139,
    left: 32,
    height: 276,
    width: 306,
    position: "absolute",
  },
  monthlyDueBy1: {
    width: 115,
    color: Color.colorDarkslategray_100,
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    fontSize: FontSize.singleLineBodyBase_size,
    left: 0,
  },
  text: {
    left: 20,
    fontSize: FontSize.size_2xs,
    textTransform: "capitalize",
    color: Color.colorGray_200,
    width: 29,
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
  },
  groupChild: {
    top: 21,
    maxHeight: "100%",
    left: 0,
    width: 69,
  },
  parent: {
    height: 21,
    top: 0,
    left: 0,
    width: 69,
  },
  monthlyDueByInner: {
    top: 1,
    left: 212,
    height: 21,
  },
  monthlyDueBy: {
    top: 520,
  },
  monthlyDueBy2: {
    top: 557,
  },
  monthlyDueBy5: {
    width: 154,
    color: Color.colorDarkslategray_100,
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    fontSize: FontSize.singleLineBodyBase_size,
    left: 0,
  },
  monthlyDueBy4: {
    top: 594,
  },
  starIcon: {
    width: 16,
    display: "none",
    height: 16,
    overflow: "hidden",
  },
  button1: {
    color: Color.textBrandOnBrand,
    lineHeight: 16,
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.singleLineBodyBase_size,
  },
  button: {
    left: 269,
    backgroundColor: Color.backgroundBrandDefault,
    borderColor: Color.backgroundBrandDefault,
  },
  button2: {
    left: 207,
    backgroundColor: Color.backgroundNeutralTertiary,
    borderColor: Color.borderNeutralSecondary,
  },
  ponikpintar: {
    left: 50,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.exo2SemiBoldItalic,
    fontSize: FontSize.singleLineBodyBase_size,
    top: 34,
    textAlign: "left",
    color: Color.colorBlack,
  },
  hitam3Icon: {
    left: 26,
    width: 18,
    height: 21,
  },
  settingsWrapper: {
    top: 25,
    left: 317,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_400,
    width: 32,
    height: 32,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
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

export default Frame8;
