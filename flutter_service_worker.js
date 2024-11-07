'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "390a005e8f8f563a07a5750289747e7e",
"assets/AssetManifest.bin.json": "c4a08a68f18632fba51fad81265255f6",
"assets/AssetManifest.json": "50e4d76cd1631f796443c87f506dd95f",
"assets/assets/firebase/fcm-dev.json": "e0561ba9c53ab069c689881bdc756ffb",
"assets/assets/fonts/NotoSansJP-Regular.ttf": "022f32abf24d5534496095e04aa739b3",
"assets/assets/fonts/NotoSansJP-SemiBold.ttf": "2f9b41d9040065bcce6ad91656732829",
"assets/assets/images/consideration/complete.svg": "003985857a091c18eab63d6597c7ea35",
"assets/assets/images/consideration/consideration01.svg": "e1cd55f97e25f30cfba277e90d4683d6",
"assets/assets/images/consideration/consideration02.svg": "e1cd55f97e25f30cfba277e90d4683d6",
"assets/assets/images/consideration/consideration03.svg": "e1cd55f97e25f30cfba277e90d4683d6",
"assets/assets/images/consideration/consideration04.svg": "e1cd55f97e25f30cfba277e90d4683d6",
"assets/assets/images/consideration/consideration05.svg": "e1cd55f97e25f30cfba277e90d4683d6",
"assets/assets/images/consideration/consideration06.svg": "e1cd55f97e25f30cfba277e90d4683d6",
"assets/assets/images/description/01.svg": "9bdd3af842659aa49682793884c992fc",
"assets/assets/images/description/02.svg": "4b2ff36a1f97aa0d70db97c69fefb8ed",
"assets/assets/images/description/03.svg": "36fc8715d835868922be81a461bc2959",
"assets/assets/images/description/04.svg": "4eace36a7eae1e921f810f0bae43353f",
"assets/assets/images/hobby/complete.svg": "f9958890507cb84402a368f784b68413",
"assets/assets/images/hobby/question01.svg": "69f16ee4b5ba952b45a1fba2e75483b7",
"assets/assets/images/hobby/question02.svg": "69f16ee4b5ba952b45a1fba2e75483b7",
"assets/assets/images/hobby/question03.svg": "69f16ee4b5ba952b45a1fba2e75483b7",
"assets/assets/images/hobby/question04.svg": "69f16ee4b5ba952b45a1fba2e75483b7",
"assets/assets/images/hobby/question05.svg": "69f16ee4b5ba952b45a1fba2e75483b7",
"assets/assets/images/hobby/question06.svg": "69f16ee4b5ba952b45a1fba2e75483b7",
"assets/assets/images/hobby/question07.svg": "69f16ee4b5ba952b45a1fba2e75483b7",
"assets/assets/images/icon/btn_camera.svg": "26a07e8cd7222adb9d716fcf27c8b66a",
"assets/assets/images/icon/btn_delete.svg": "e950a953790b35a18ac6459edc771076",
"assets/assets/images/icon/icon_add.svg": "73470e00ff3356490c3ad1189f03c51f",
"assets/assets/images/icon/icon_bottom_arrow.svg": "edb6b1d2b6aca5fe079a4c8ae0ef4b7f",
"assets/assets/images/icon/icon_caution.svg": "0a2f28b575c26617d05277f0d5a75e9c",
"assets/assets/images/icon/icon_caution_trash.svg": "9625b5e61d46ec5abcf8f8fc1484b6e0",
"assets/assets/images/icon/icon_delete.svg": "d0dbfb318ac59f6f7cceb6affa2ea5f0",
"assets/assets/images/icon/icon_disease.svg": "519037ec81eb6055c60a35eb6b70ef48",
"assets/assets/images/icon/icon_d_camera.svg": "5cba5a76b0d1a3c7aef48c7e2ec4cfab",
"assets/assets/images/icon/icon_d_folder.svg": "6b00cbf9f834d1d4f7e0213f44d4d425",
"assets/assets/images/icon/icon_d_trash.svg": "5b4ffbfafcb5f17bafbdf5b45685df3b",
"assets/assets/images/icon/icon_edit.svg": "d94956ce215ab4550dbf22fd55d58fbe",
"assets/assets/images/icon/icon_example.svg": "9c6cc0d57af73d3773611801c207e1b5",
"assets/assets/images/icon/icon_history_close.svg": "05b05e9bca439cdcacb077538349110e",
"assets/assets/images/icon/icon_hobby.svg": "69f16ee4b5ba952b45a1fba2e75483b7",
"assets/assets/images/icon/icon_image_zoom.svg": "bbd45d0a2cb097920b3b0b8a1aa8d44f",
"assets/assets/images/icon/icon_info_check.svg": "e51560ee9c95282b1a9bb8762a7fdf05",
"assets/assets/images/icon/icon_info_delete.svg": "18cb535e2f4f3225acf43b267b9eeed1",
"assets/assets/images/icon/icon_left_arrow.svg": "ab6abb0fcedd1e024624aeb11f08b8df",
"assets/assets/images/icon/icon_life_story.svg": "80635028fa258b85c3912203ba28371f",
"assets/assets/images/icon/icon_l_plus.svg": "d7754999c42ade1fdba6829f6b8873fe",
"assets/assets/images/icon/icon_medicine.svg": "b107d5f31da36473645d76d5d13390e5",
"assets/assets/images/icon/icon_menu.svg": "f79754e1b427798f9cbf3ec0c818263a",
"assets/assets/images/icon/icon_remarks.svg": "dccd56ccb16eba89ba773834d3cf5807",
"assets/assets/images/icon/icon_restoration.svg": "82282a21aa75f433a11739972983ac44",
"assets/assets/images/icon/icon_return.svg": "10ea150c599265c57017ca4332995d5f",
"assets/assets/images/icon/icon_right_arrow.svg": "be3b327bccd9020992f9371a333e3616",
"assets/assets/images/icon/icon_search.svg": "546f361ff716852d30fe2a2c981b4fd4",
"assets/assets/images/icon/icon_summary.svg": "381b828689531f6e71e8c247974d70f8",
"assets/assets/images/icon/icon_support.svg": "e1cd55f97e25f30cfba277e90d4683d6",
"assets/assets/images/icon/icon_support_complete.svg": "003985857a091c18eab63d6597c7ea35",
"assets/assets/images/icon/icon_s_plus.svg": "ded808f9d274f08819e8f3324e6086aa",
"assets/assets/images/icon/icon_today.svg": "eaa76f258c1628ef6a8e10f3180c266a",
"assets/assets/images/icon/icon_top_close.svg": "84d6617ffe91dc3f6f7d203066eadecb",
"assets/assets/images/icon/icon_user.svg": "608ce50ba9111dec360b47bb0640a790",
"assets/assets/images/icon/icon_w_close.svg": "063d3249d7673a9d862cffe44c23d039",
"assets/assets/images/life_story/complete.svg": "d5428d7b9606e88c96026218a9580f51",
"assets/assets/images/life_story/question01.svg": "80635028fa258b85c3912203ba28371f",
"assets/assets/images/life_story/question02.svg": "80635028fa258b85c3912203ba28371f",
"assets/assets/images/life_story/question03.svg": "80635028fa258b85c3912203ba28371f",
"assets/assets/images/life_story/question04.svg": "80635028fa258b85c3912203ba28371f",
"assets/assets/images/life_story/question05.svg": "80635028fa258b85c3912203ba28371f",
"assets/assets/images/life_story/question06.svg": "80635028fa258b85c3912203ba28371f",
"assets/assets/images/life_story/question07.svg": "80635028fa258b85c3912203ba28371f",
"assets/assets/images/login/first_complete.svg": "6afbc22cda3dc89d62cc63026886fdb1",
"assets/assets/images/login/logo.png": "407eedbe746996ef54deb191a3de439e",
"assets/assets/images/login/logo_typo.png": "4ce81e1d4f0011a2a22826f3c92abfb2",
"assets/assets/images/mypage/icon_eye_close.svg": "37742459cf1e7d977f3c88d6dc58d245",
"assets/assets/images/mypage/icon_eye_open.svg": "e2afaa9e0860a19aa058a7c9e256086c",
"assets/assets/images/mypage/icon_facility.svg": "77d3aa408557f3672e26bd3a170271d9",
"assets/assets/images/mypage/icon_not_set.svg": "608ce50ba9111dec360b47bb0640a790",
"assets/assets/images/mypage/icon_recent_inactive.svg": "d83df76997c098b500a4d045d4eb7d91",
"assets/assets/images/mypage/icon_record_inactive.svg": "9c10412cc1f00110fd881548b00199f8",
"assets/assets/images/mypage/icon_set_image.svg": "26a07e8cd7222adb9d716fcf27c8b66a",
"assets/assets/images/mypage/icon_s_not_set.svg": "74393dbbb2d47456a562ae07b1beec83",
"assets/assets/images/mypage/mypage_illust.svg": "4608200392f9aca53c7850d14902f1b6",
"assets/assets/images/mypage/switch_active.svg": "7af83652b4b533622c952bb05c5f9664",
"assets/assets/images/mypage/switch_inactive.svg": "9d6c6ca8eb994fa6a336b3f3108d6540",
"assets/assets/images/qr_logo/dev.png": "ffe56457ee694c14ee8422192726c553",
"assets/assets/images/qr_logo/poc.png": "407eedbe746996ef54deb191a3de439e",
"assets/assets/images/record/btn_bathing.svg": "c5166777c142e90904d0d2725c5cea58",
"assets/assets/images/record/btn_blood_pressure.svg": "52fa8958ab5fdcf91737976cf98db853",
"assets/assets/images/record/btn_defecation.svg": "3229396fd39bcb366df691373be47d3e",
"assets/assets/images/record/btn_edit.svg": "e06f00b44188d6d3c0a402e850e43944",
"assets/assets/images/record/btn_function.svg": "c0b522780b37164b23c4e639606f16ab",
"assets/assets/images/record/btn_get_up.svg": "b8442a53894f40ace414cbd22aa29b82",
"assets/assets/images/record/btn_go_out.svg": "0d8f367604a1d3865d9b7daeb2d3fe85",
"assets/assets/images/record/btn_height.svg": "cedd43a0260ec5c071c0a7cfa2edd794",
"assets/assets/images/record/btn_meal.svg": "705a3f55c08f95d91b1f0b439154b57f",
"assets/assets/images/record/btn_medication.svg": "afa0f5be455c399f2afd907e7ea23e00",
"assets/assets/images/record/btn_moisture.svg": "7f23f893c3421748a52dd856708eb1a9",
"assets/assets/images/record/btn_motion.svg": "7b604bb6f098c97316bf19dfb37ff875",
"assets/assets/images/record/btn_orientation.svg": "e8cd0a8f5905aa6b26787b6a3debd751",
"assets/assets/images/record/btn_other.svg": "daf9b61e83a5395e9a0470ee6ad29a40",
"assets/assets/images/record/btn_play.svg": "d25f2a4ef6060c17329844f10baec84b",
"assets/assets/images/record/btn_sleep.svg": "72722424021447d6fb87135a0a15eac9",
"assets/assets/images/record/btn_snack.svg": "c916e10a62f36f315adf901ce9896950",
"assets/assets/images/record/btn_stop.svg": "736b9618dfa4e1db1faa11762ec61d0b",
"assets/assets/images/record/btn_temperature.svg": "77bdf5f736275d99b0851cea1d8981a6",
"assets/assets/images/record/btn_urination.svg": "1647c3830b4cb6a250379494192bc0ef",
"assets/assets/images/record/btn_weight.svg": "667cdd435cfe9965601b7cef6e4cd7ae",
"assets/assets/images/record/icon_bathing.svg": "ca0a7367779a23abdaf33216536312ae",
"assets/assets/images/record/icon_blood_pressure.svg": "1ef3c913673a9a9544dc07eabf6be3bc",
"assets/assets/images/record/icon_defecation.svg": "29235477266a4d0b959b2c6590981a3b",
"assets/assets/images/record/icon_function.svg": "1a60895faf2d4649eb5def94b98c54ab",
"assets/assets/images/record/icon_get_up.svg": "ecfbe6593501d09ac83c214c9ef3d16c",
"assets/assets/images/record/icon_go_out.svg": "aaeb885184888fb940a2941c17cc0835",
"assets/assets/images/record/icon_height.svg": "fd55c9f5944705bca4a88f46b81f7333",
"assets/assets/images/record/icon_indicator.svg": "ab5f8968a9ae2672911c9147c59c50a8",
"assets/assets/images/record/icon_life_record.svg": "4965d1e3a612ebb1126aa16d023a8e33",
"assets/assets/images/record/icon_meal.svg": "e72d600fff715caf41cb314366125179",
"assets/assets/images/record/icon_medication.svg": "cd3380f7c8ed071fada34a0e7393464c",
"assets/assets/images/record/icon_moisture.svg": "740b9f7fc16618a464b8c78340b8c6bc",
"assets/assets/images/record/icon_motion.svg": "0cf0258c2bc5d921e9fa7010dcadcdb8",
"assets/assets/images/record/icon_mute.svg": "2eda4232ff75424e972882d890b89802",
"assets/assets/images/record/icon_mypage_inactive.svg": "2f47b94c4db17e181a8287efe14169c1",
"assets/assets/images/record/icon_orientation.svg": "89f21b3ac6731bb0c59694a54942a3cc",
"assets/assets/images/record/icon_other.svg": "d7eb58b9df20361154b9a57a82ce6720",
"assets/assets/images/record/icon_play.svg": "cd628c0dfa73f35b86641568542b2a95",
"assets/assets/images/record/icon_recent_inactive.svg": "d83df76997c098b500a4d045d4eb7d91",
"assets/assets/images/record/icon_record.svg": "53f7d080b3ba549e87e9e64269a2b6a1",
"assets/assets/images/record/icon_sleep.svg": "7ab13c690dce8b03bef42b2772ffcd39",
"assets/assets/images/record/icon_slide_arrow.svg": "d57061a2694cac218f8093bc6b3a0ad4",
"assets/assets/images/record/icon_snack.svg": "9144152eff95c05b004acc9b42245973",
"assets/assets/images/record/icon_stop.png": "d445f628a427942b534f87e40f23cf17",
"assets/assets/images/record/icon_symptoms.svg": "4629b22ca874c184803a41f7b7c946c7",
"assets/assets/images/record/icon_temperature.svg": "e047807ec1acbddd445ca276dd656fe9",
"assets/assets/images/record/icon_today.svg": "eaa76f258c1628ef6a8e10f3180c266a",
"assets/assets/images/record/icon_urination.svg": "b8310d56f501dda2f4de43e8ee8c7680",
"assets/assets/images/record/icon_volume.png": "72539e2df2264b5de61202e58356d1bb",
"assets/assets/images/record/icon_weight.svg": "eeb60f20877d3d21e2f6819e779f39b9",
"assets/assets/images/time_line/btn_play.svg": "736b9618dfa4e1db1faa11762ec61d0b",
"assets/assets/images/time_line/btn_stop.svg": "736b9618dfa4e1db1faa11762ec61d0b",
"assets/assets/images/time_line/icon_bell.svg": "8e37639cf09b3a3e197379e26de6c518",
"assets/assets/images/time_line/icon_bell_active.svg": "8e37639cf09b3a3e197379e26de6c518",
"assets/assets/images/time_line/icon_book.svg": "40ad3317c8dbb6184c7531f83fd7dae5",
"assets/assets/images/time_line/icon_calendar.svg": "a0fb64a1fc53b6a57d6027c3ceda87e6",
"assets/assets/images/time_line/icon_clock.svg": "a5b376e3c9d5a4e869e5a6d56c6c74a9",
"assets/assets/images/time_line/icon_facility.svg": "77d3aa408557f3672e26bd3a170271d9",
"assets/assets/images/time_line/icon_flag.svg": "a706c15a78dd2d7e825c91259bf3ee82",
"assets/assets/images/time_line/icon_info_add.svg": "99f269ef4209759fb48bc83449af693b",
"assets/assets/images/time_line/icon_info_change.svg": "6ab18a1c6faf6993e6f43a2b6c00b1c5",
"assets/assets/images/time_line/icon_info_delete.svg": "5b4ffbfafcb5f17bafbdf5b45685df3b",
"assets/assets/images/time_line/icon_media.svg": "7206ac1a2006ee0ccb60d0be2de0d2cb",
"assets/assets/images/time_line/icon_navi_mypage_inactive.svg": "2f47b94c4db17e181a8287efe14169c1",
"assets/assets/images/time_line/icon_navi_recent.svg": "abc89b4122396f3f554e71c99a6f8336",
"assets/assets/images/time_line/icon_navi_record_inactive.svg": "9c10412cc1f00110fd881548b00199f8",
"assets/assets/images/time_line/icon_news_new.svg": "90db4b295596f1d4d4654b6b1efefef2",
"assets/assets/images/time_line/icon_person.svg": "cb0bb8d2948981ac8a95d5e1a64c171b",
"assets/assets/images/time_line/icon_present.svg": "26eb54a6f11620fcecd9b8133ccf10d1",
"assets/assets/images/time_line/icon_r_arrow.svg": "d8a2adc965d561b457240d944cc66549",
"assets/assets/images/time_line/icon_r_watashite.svg": "543aff52249b77e81c57a6404117c75d",
"assets/assets/images/time_line/icon_write.svg": "cc1a360589f3c314c26755ea8247bffe",
"assets/assets/images/time_line/icon_w_arrow.svg": "730b045765400eeb5bdc2a4cfca6304e",
"assets/assets/images/time_line/illust_notification.svg": "8360979506c502d7187a53a5e24b8fd5",
"assets/assets/images/time_line/record_outline.svg": "91381d944fb1275b1b2feadbac8e47bb",
"assets/assets/launcher_icons/icon-dev.png": "773bd5052004c94bfa0b8641cbcc36e8",
"assets/assets/launcher_icons/icon-poc.png": "3096a8d80f881b56c9a8114aa9f0d0e0",
"assets/assets/launcher_icons/icon-prod.png": "de8a447f1325669b9f04aecef384b85c",
"assets/assets/launcher_icons/icon-stg.png": "d1c4e1ee742f982be56459da405464b5",
"assets/assets/objectbox/allergyMasters/data.mdb": "98830a0cf22735550e2932e687fcb2d1",
"assets/assets/objectbox/colorOfFecesMasters/data.mdb": "491f3018038fb2e1ac29fe91e5c06d2b",
"assets/assets/objectbox/dementiaSymptomMasters/data.mdb": "9796cab4acc5e6c660cf3310189202c0",
"assets/assets/objectbox/diseaseMasters/data.mdb": "a3c741bd601cb91ccd128fce7f3e7c27",
"assets/assets/objectbox/diseaseStatusMasters/data.mdb": "6e2dac0164dfe121b8dee8fca0e06f02",
"assets/assets/objectbox/medicineMasters/data.mdb": "70c0c3efafae0543da40b7a5f4e5eed5",
"assets/assets/objectbox/medicineUnitMasters/data.mdb": "e5810b084fbd9ed0d10606d30c34a314",
"assets/assets/objectbox/stateOfFecesMasters/data.mdb": "e14e5e8b3da71ed155a5375c6d9b7046",
"assets/assets/objectbox/usageAsNeededMasters/data.mdb": "ac33857ab365cc79b4022a6eafccc6dc",
"assets/assets/objectbox/usageExternalMasters/data.mdb": "ed0213eeeb922ef4a0a70b8183c835ba",
"assets/assets/objectbox/usageTimingMasters/data.mdb": "a92a7da0b097f2540d697c83ce3e889b",
"assets/assets/objectbox/usageTypeMasters/data.mdb": "7c4d01135b79632b64b0622907e657bb",
"assets/FontManifest.json": "b8a214bc6c7683646f5960a3549cca53",
"assets/fonts/MaterialIcons-Regular.otf": "cf1f530c731c5a46b63bddf3788f1e50",
"assets/NOTICES": "b0a8e3a5548def8d3e1e93066a3e2d97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d6182842f24cced8cc4c8a04278b96c7",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "48106461a0231b5db7d87fc86b1d88d1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "490c7443ca44255a4ed1b3559d016ffe",
"/": "490c7443ca44255a4ed1b3559d016ffe",
"main.dart.js": "f6bdebebb20086b7209379848e818b3e",
"manifest.json": "f98434eb6814bf4fa941be662870704a",
"splash/img/dark-1x.png": "eabc2d8c1991f671b949b1bf90f7db03",
"splash/img/dark-2x.png": "8add668100eacb02140189c43329a8a1",
"splash/img/dark-3x.png": "b3ea748cd533c3d41cf563bdd53de445",
"splash/img/dark-4x.png": "3615cfbdba76258f49068fb7a2c3764b",
"splash/img/light-1x.png": "eabc2d8c1991f671b949b1bf90f7db03",
"splash/img/light-2x.png": "8add668100eacb02140189c43329a8a1",
"splash/img/light-3x.png": "b3ea748cd533c3d41cf563bdd53de445",
"splash/img/light-4x.png": "3615cfbdba76258f49068fb7a2c3764b",
"version.json": "2c1007c6072970994d7ab9c1cd912777"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
