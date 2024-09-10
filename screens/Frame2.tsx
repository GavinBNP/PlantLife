import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  StyleVariable,
} from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.child, styles.itemPosition]} />
      <LinearGradient
        style={[styles.item, styles.itemPosition]}
        locations={[0, 1]}
        colors={["rgba(184, 217, 121, 0.88)", "rgba(167, 255, 0, 0.56)"]}
        useAngle={true}
        angle={180}
      />
      <Text style={[styles.hiKania, styles.waterFlexBox]}>Hi, Kania</Text>
      <Text style={[styles.goodConditionLets, styles.waterFlexBox]}>
        Good condition? Let's check your plants!
      </Text>
      <Text style={[styles.latestReport, styles.statusTypo]}>
        Latest Report
      </Text>
      <Text style={[styles.status, styles.statusTypo]}>Status</Text>
      <Text style={[styles.actionTab, styles.statusTypo]}>Action Tab</Text>
      <View style={[styles.inner, styles.innerShadowBox]} />
      <View style={[styles.rectangleView, styles.switchFieldLayout]} />
      <View style={[styles.child1, styles.innerShadowBox]} />
      <View style={[styles.child2, styles.childShadowBox1]} />
      <View style={[styles.child3, styles.childShadowBox1]} />
      <View style={[styles.child4, styles.childShadowBox]} />
      <View style={[styles.child5, styles.childShadowBox]} />
      <Image
        style={styles.mediaIcon}
        resizeMode="cover"
        source={require("../assets/media--icon2.png")}
      />
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text, styles.cTypo]}>{`< 7`}</Text>
        <Text style={[styles.waterPh, styles.waterTypo]}>WATER PH</Text>
      </View>
      <View style={[styles.ppmParent, styles.parentLayout]}>
        <Text style={[styles.ppm, styles.ppmLayout]}>
          <Text style={styles.text1}>{`155 `}</Text>
          <Text style={styles.ppm1}>PPM</Text>
        </Text>
        <Text style={[styles.waterPpm, styles.ppmLayout]}>WATER PPM</Text>
      </View>
      <View style={[styles.cParent, styles.cGroupLayout]}>
        <Text style={[styles.c, styles.cLayout]}>
          <Text style={styles.text1}>35</Text>
          <Text style={styles.c1}> °C</Text>
        </Text>
        <Text style={[styles.waterTemp, styles.cLayout]}>WATER TEMP</Text>
      </View>
      <View style={[styles.cGroup, styles.cGroupLayout]}>
        <Text style={[styles.c2, styles.cTypo]}>
          <Text style={styles.text1}>{`42 `}</Text>
          <Text style={styles.c1}> °C</Text>
        </Text>
        <Text style={[styles.temperture, styles.waterTypo]}>TEMPERTURE</Text>
      </View>
      <View style={[styles.mmParent, styles.parentPosition]}>
        <Text style={[styles.mm, styles.cTypo]}>
          <Text style={styles.text1}>{`234 `}</Text>
          <Text style={styles.c1}>MM</Text>
        </Text>
        <Text style={[styles.waterLevel, styles.waterTypo]}>WATER LEVEL</Text>
      </View>
      <View style={[styles.cdParent, styles.parentPosition]}>
        <Text style={[styles.cd, styles.cdLayout]}>
          <Text style={styles.text1}>{`132 `}</Text>
          <Text style={styles.c1}>CD</Text>
        </Text>
        <Text
          style={[styles.lightIntensity, styles.cdLayout]}
        >{`LIGHT INTENSITY `}</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.child6Layout]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.child6, styles.child6Layout]}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.child7, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.child8, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={[styles.child9, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={[styles.child10, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/vector-7.png")}
      />
      <View style={[styles.switchField, styles.searchLayout]}>
        <View style={[styles.checkboxAndLabel, styles.wrapperFlexBox]}>
          <Text style={[styles.label, styles.labelTypo]}>Auto Action</Text>
          <Image
            style={styles.switchIcon}
            resizeMode="cover"
            source={require("../assets/switch.png")}
          />
        </View>
        <Text style={[styles.description, styles.labelTypo]}>
          Enabling Auto Pump
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={styles.buttonGroupParent}>
            <View style={[styles.buttonGroup, styles.buttonGroupLayout]}>
              <View style={[styles.button, styles.buttonBorder]}>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star.png")}
                />
                <Text style={[styles.button1, styles.buttonClr]}>
                  Nutrient A
                </Text>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/x.png")}
                />
              </View>
              <View style={[styles.button2, styles.buttonBorder]}>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
                <Text style={[styles.button3, styles.button3Typo]}>+</Text>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/x1.png")}
                />
              </View>
            </View>
            <View style={[styles.buttonGroup1, styles.buttonGroupLayout]}>
              <View style={[styles.button, styles.buttonBorder]}>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
                <Text style={[styles.button1, styles.buttonClr]}>
                  Nutrient B
                </Text>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/x1.png")}
                />
              </View>
              <View style={[styles.button2, styles.buttonBorder]}>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
                <Text style={[styles.button3, styles.button3Typo]}>+</Text>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/x1.png")}
                />
              </View>
            </View>
            <View style={[styles.buttonGroup2, styles.buttonGroupLayout]}>
              <View style={[styles.button, styles.buttonBorder]}>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star.png")}
                />
                <Text style={[styles.button1, styles.buttonClr]}>Water</Text>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/x.png")}
                />
              </View>
              <View style={[styles.button2, styles.buttonBorder]}>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/star1.png")}
                />
                <Text style={[styles.button3, styles.button3Typo]}>+</Text>
                <Image
                  style={[styles.starIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/x1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.homeWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
        </View>
        <View style={[styles.iconWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={[styles.iconWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <View style={[styles.iconWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
      <Text style={[styles.ponikpintar, styles.hitam1IconPosition]}>
        PonikPintar
      </Text>
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.search, styles.buttonBorder]}>
        <Text style={[styles.value, styles.valueTypo]}>Search tools</Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
      </View>
      <Image
        style={[styles.hitam1Icon, styles.hitam1IconPosition]}
        resizeMode="cover"
        source={require("../assets/hitam-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemPosition: {
    width: 369,
    left: 0,
    position: "absolute",
  },
  waterFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  statusTypo: {
    height: 26,
    width: 131,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    left: 32,
    position: "absolute",
  },
  innerShadowBox: {
    height: 120,
    width: 144,
    top: 567,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.backgroundDefaultDefault,
    position: "absolute",
  },
  switchFieldLayout: {
    width: 306,
    left: 32,
  },
  childShadowBox1: {
    top: 705,
    height: 120,
    width: 144,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.backgroundDefaultDefault,
    position: "absolute",
  },
  childShadowBox: {
    top: 843,
    height: 120,
    width: 144,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.backgroundDefaultDefault,
    position: "absolute",
  },
  parentLayout: {
    height: 58,
    width: 128,
    top: 581,
    position: "absolute",
  },
  cTypo: {
    height: 38,
    fontFamily: FontFamily.proximaNova,
    fontWeight: "700",
  },
  waterTypo: {
    height: 14,
    fontWeight: "300",
    lineHeight: 17,
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_smi,
  },
  ppmLayout: {
    width: 98,
    textAlign: "left",
    color: Color.colorBlack,
  },
  cGroupLayout: {
    height: 56,
    top: 719,
    width: 128,
    position: "absolute",
  },
  cLayout: {
    width: 90,
    textAlign: "left",
    color: Color.colorBlack,
  },
  parentPosition: {
    top: 857,
    width: 128,
    position: "absolute",
  },
  cdLayout: {
    width: 118,
    textAlign: "left",
    color: Color.colorBlack,
  },
  child6Layout: {
    width: 112,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  childPosition: {
    top: 777,
    width: 112,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  childLayout: {
    top: 915,
    height: 28,
    width: 112,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  searchLayout: {
    height: 35,
    position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  labelTypo: {
    fontFamily: FontFamily.singleLineBodyBase,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  groupLayout: {
    height: 169,
    width: 306,
    position: "absolute",
  },
  buttonGroupLayout: {
    gap: StyleVariable.space400,
    height: 36,
    width: 277,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  buttonBorder: {
    gap: StyleVariable.space200,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iconLayout: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  buttonClr: {
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.singleLineBodyBase,
  },
  button3Typo: {
    fontSize: FontSize.singleLineBodyBase_size,
    textAlign: "left",
  },
  hitam1IconPosition: {
    top: 34,
    position: "absolute",
  },
  valueTypo: {
    lineHeight: 13,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  child: {
    borderRadius: Border.br_xl,
    height: 1414,
    backgroundColor: Color.backgroundDefaultDefault,
    top: 0,
  },
  item: {
    top: -30,
    borderRadius: Border.br_11xl,
    height: 538,
    backgroundColor: "transparent",
  },
  hiKania: {
    top: 107,
    fontSize: FontSize.size_21xl,
    width: 172,
    height: 27,
    fontFamily: FontFamily.proximaNova,
    fontWeight: "700",
    textAlign: "left",
    left: 32,
    position: "absolute",
  },
  goodConditionLets: {
    top: 149,
    left: 35,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  latestReport: {
    top: 534,
  },
  status: {
    top: 243,
  },
  actionTab: {
    top: 985,
  },
  inner: {
    left: 32,
  },
  rectangleView: {
    top: 276,
    height: 215,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.backgroundDefaultDefault,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  child1: {
    left: 194,
  },
  child2: {
    left: 32,
  },
  child3: {
    left: 194,
  },
  child4: {
    left: 32,
  },
  child5: {
    left: 194,
  },
  mediaIcon: {
    top: 538,
    left: 317,
    width: 21,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    lineHeight: 42,
    width: 52,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  waterPh: {
    width: 65,
    textAlign: "left",
    color: Color.colorBlack,
  },
  parent: {
    left: 48,
  },
  text1: {
    fontSize: FontSize.size_13xl,
  },
  ppm1: {
    fontSize: FontSize.size_xs,
  },
  ppm: {
    height: 38,
    fontFamily: FontFamily.proximaNova,
    fontWeight: "700",
  },
  waterPpm: {
    height: 14,
    fontWeight: "300",
    lineHeight: 17,
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_smi,
  },
  ppmParent: {
    left: 210,
  },
  c1: {
    fontSize: FontSize.size_smi,
  },
  c: {
    height: 38,
    fontFamily: FontFamily.proximaNova,
    fontWeight: "700",
  },
  waterTemp: {
    height: 14,
    fontWeight: "300",
    lineHeight: 17,
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_smi,
  },
  cParent: {
    left: 48,
  },
  c2: {
    width: 85,
    textAlign: "left",
    color: Color.colorBlack,
  },
  temperture: {
    width: 92,
    textAlign: "left",
    color: Color.colorBlack,
  },
  cGroup: {
    left: 210,
  },
  mm: {
    width: 102,
    textAlign: "left",
    color: Color.colorBlack,
  },
  waterLevel: {
    width: 95,
    textAlign: "left",
    color: Color.colorBlack,
  },
  mmParent: {
    height: 55,
    left: 48,
  },
  cd: {
    height: 38,
    fontFamily: FontFamily.proximaNova,
    fontWeight: "700",
  },
  lightIntensity: {
    height: 14,
    fontWeight: "300",
    lineHeight: 17,
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_smi,
  },
  cdParent: {
    height: 52,
    left: 210,
  },
  vectorIcon: {
    top: 647,
    height: 18,
    left: 48,
  },
  child6: {
    top: 637,
    height: 28,
    left: 210,
  },
  child7: {
    height: 33,
    left: 210,
  },
  child8: {
    height: 28,
    left: 48,
  },
  child9: {
    left: 48,
  },
  child10: {
    left: 210,
  },
  label: {
    color: Color.textDefaultDefault,
    flex: 1,
  },
  switchIcon: {
    borderRadius: Border.br_9980xl,
    width: 40,
    height: 24,
    overflow: "hidden",
  },
  checkboxAndLabel: {
    gap: StyleVariable.space300,
  },
  description: {
    color: Color.textDefaultSecondary,
    alignSelf: "stretch",
    fontFamily: FontFamily.singleLineBodyBase,
    lineHeight: 18,
  },
  switchField: {
    top: 1009,
    width: 306,
    left: 32,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.backgroundDefaultDefault,
    left: 0,
    height: 169,
    top: 0,
  },
  starIcon: {
    display: "none",
    height: 16,
  },
  button1: {
    lineHeight: 13,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  button: {
    padding: StyleVariable.space200,
    justifyContent: "center",
    borderColor: Color.backgroundDefaultDefault,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: StyleVariable.radius200,
    borderWidth: 1,
    flex: 1,
  },
  button3: {
    lineHeight: 16,
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.singleLineBodyBase,
  },
  button2: {
    flex: 0.9289,
    padding: StyleVariable.space300,
    justifyContent: "center",
    borderColor: Color.backgroundDefaultDefault,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: StyleVariable.radius200,
    borderWidth: 1,
  },
  buttonGroup: {
    top: 0,
  },
  buttonGroup1: {
    top: 48,
  },
  buttonGroup2: {
    top: 96,
  },
  buttonGroupParent: {
    top: 19,
    left: 15,
    height: 132,
    width: 277,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    height: 169,
    top: 0,
  },
  groupView: {
    top: 1062,
    left: 29,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  homeIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  homeWrapper: {
    backgroundColor: Color.colorYellowgreen_200,
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    width: 19,
    height: 16,
  },
  iconWrapper: {
    marginLeft: -1,
    justifyContent: "center",
    flex: 1,
  },
  icon1: {
    width: 13,
    height: 18,
  },
  frameParent: {
    top: 1235,
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 1,
    height: 46,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    width: 369,
    backgroundColor: Color.backgroundDefaultDefault,
    left: 0,
    position: "absolute",
  },
  ponikpintar: {
    left: 50,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.exo2SemiBoldItalic,
    fontSize: FontSize.singleLineBodyBase_size,
    textAlign: "left",
    color: Color.colorBlack,
    top: 34,
  },
  vectorIcon1: {
    height: "1.55%",
    width: "4.61%",
    top: "2.93%",
    right: "6.5%",
    bottom: "95.53%",
    left: "88.89%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  value: {
    color: Color.textDefaultTertiary,
    fontFamily: FontFamily.sFProText,
    lineHeight: 13,
    flex: 1,
  },
  searchIcon: {
    height: 16,
  },
  search: {
    top: 183,
    left: 24,
    borderRadius: StyleVariable.radiusFull,
    borderColor: Color.borderDefaultDefault,
    width: 322,
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    height: 35,
    position: "absolute",
    backgroundColor: Color.backgroundDefaultDefault,
  },
  hitam1Icon: {
    left: 26,
    width: 18,
    height: 21,
  },
  view: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorGray_500,
    width: "100%",
    height: 1281,
    overflow: "hidden",
    flex: 1,
  },
});

export default Frame2;
