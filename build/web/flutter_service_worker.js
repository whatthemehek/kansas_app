'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d29c78e31c8f1282c35e8ba4afe76f07",
"assets/assets/button-1.mp3": "d25de3d17248bdbe7f6701fd03662860",
"assets/assets/sounds/Index10Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index10Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index10Length1.mp3": "7af35df851c800318259936d0a24d6e9",
"assets/assets/sounds/Index10Length1.wav": "e3876e80d51303ca86beedab3f8ef10b",
"assets/assets/sounds/Index10Length2.mp3": "295b4b696a3b64070415381ba85641a5",
"assets/assets/sounds/Index10Length2.wav": "06402c9c967ec183ee951b3786fc8c74",
"assets/assets/sounds/Index10Length3.mp3": "d598961e68f879e872aca395817b5383",
"assets/assets/sounds/Index10Length3.wav": "024dcd98260d9cc4751ac6264f0fde0c",
"assets/assets/sounds/Index10Length4.mp3": "851bb7017f94c1932fc7a244e0edf77c",
"assets/assets/sounds/Index10Length4.wav": "c4a6f3bd2e0195e77f5f38b4191b288e",
"assets/assets/sounds/Index10Length6.mp3": "2ea4ccd055a4f1e12d4d5b081be59b1f",
"assets/assets/sounds/Index10Length6.wav": "0d76e4e436b4b43a0c2fbac65307964d",
"assets/assets/sounds/Index11Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index11Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index11Length1.mp3": "e2abc4f1461cfe2fd9259b872094787b",
"assets/assets/sounds/Index11Length1.wav": "7bdbcff632a39166b9fe9d74a788636e",
"assets/assets/sounds/Index11Length2.mp3": "b1d399a71044964ea71d8ef05bb5f135",
"assets/assets/sounds/Index11Length2.wav": "42e8f17a8f797493edc44bcc479d60fa",
"assets/assets/sounds/Index11Length3.mp3": "45d3a84ff645a0162b95967cb619a1a5",
"assets/assets/sounds/Index11Length3.wav": "a05e66d8ff1c998d9638567727e49645",
"assets/assets/sounds/Index11Length4.mp3": "4523a817b9e8b95a3af72c327b66d421",
"assets/assets/sounds/Index11Length4.wav": "584125ca091d3be316c08ee797719d14",
"assets/assets/sounds/Index11Length6.mp3": "f124686c227237b73a912453bc7a2e86",
"assets/assets/sounds/Index11Length6.wav": "6cb646a92523094c596756be14171dda",
"assets/assets/sounds/Index12Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index12Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index12Length1.mp3": "f2149129c7d1b29e635903d70e3d0e5e",
"assets/assets/sounds/Index12Length1.wav": "11247e748acdc0679524b3160b840563",
"assets/assets/sounds/Index12Length2.mp3": "7f9ccacb9b2fc0e7f5ffe7eb10b35033",
"assets/assets/sounds/Index12Length2.wav": "29e138b05d825e94cb21b1a09a229d6e",
"assets/assets/sounds/Index12Length3.mp3": "d79bd9188a5b9de9c563651353eabd71",
"assets/assets/sounds/Index12Length3.wav": "a43d31bab7e6ba732333e914b21366ca",
"assets/assets/sounds/Index12Length4.mp3": "aab1be86bf93c96029cf9af48a1cdc19",
"assets/assets/sounds/Index12Length4.wav": "249220af94595507cf2b8be63ae06b53",
"assets/assets/sounds/Index13Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index13Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index13Length1.mp3": "a6d45a2d312174f5b13f91d43a7e52f0",
"assets/assets/sounds/Index13Length1.wav": "12d17bffd3558c90721779474d2db81b",
"assets/assets/sounds/Index13Length2.mp3": "9dcaa030ab4d219133156d491d0b1504",
"assets/assets/sounds/Index13Length2.wav": "746f509a12e5f7f2ece7209e7722f3f9",
"assets/assets/sounds/Index13Length3.mp3": "55a24de3312173bc5688a5c5c78e2c8e",
"assets/assets/sounds/Index13Length3.wav": "90665e5c989f7e7379e2a7e4d54f3aac",
"assets/assets/sounds/Index13Length4.mp3": "c3d743459062347de3de57fe2923afc2",
"assets/assets/sounds/Index13Length4.wav": "4eac2adb92f81fe26c37e268f703fa2c",
"assets/assets/sounds/Index14Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index14Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index14Length1.mp3": "f419f60b1d3374ef089055df02d09acd",
"assets/assets/sounds/Index14Length1.wav": "aa7777a5e53a9514c89a01beedf05a13",
"assets/assets/sounds/Index14Length2.mp3": "026b3478baf058b9adfd677185334092",
"assets/assets/sounds/Index14Length2.wav": "85f14e073d1698e24709436f91eae42c",
"assets/assets/sounds/Index14Length3.mp3": "909dd429cff884feed9a3b04aff9713e",
"assets/assets/sounds/Index14Length3.wav": "cdf2a57e901376c7655ac9b90728cabd",
"assets/assets/sounds/Index15Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index15Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index15Length1.mp3": "a0a6e7b2f08ff7fffe2fa6ac994576c7",
"assets/assets/sounds/Index15Length1.wav": "51de52e5be0125a54c637a7a736b3055",
"assets/assets/sounds/Index15Length2.mp3": "38215a26068d945cff6df3faf281fec6",
"assets/assets/sounds/Index15Length2.wav": "7db7b43cab2c9294dd458e1d0b57dfae",
"assets/assets/sounds/Index16Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index16Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index16Length1.mp3": "d8be2519c0a108b021c71befc9ae8cbd",
"assets/assets/sounds/Index16Length1.wav": "099e44307f3bdf7174b4f44836ecc658",
"assets/assets/sounds/Index1Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index1Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index1Length1.mp3": "a266e4fee6f75977a40b57599fe1968e",
"assets/assets/sounds/Index1Length1.wav": "772615684d0f2489bf9166a569356866",
"assets/assets/sounds/Index1Length12.mp3": "dc3526c983d8e2d56525c31be7e98a87",
"assets/assets/sounds/Index1Length12.wav": "4887a12550b4952f0f6e189ddbe323c7",
"assets/assets/sounds/Index1Length16.mp3": "67acdb5580587c66b7155e2c5b9d039d",
"assets/assets/sounds/Index1Length16.wav": "b119c78b320e927c6f3ffae5a9f30a04",
"assets/assets/sounds/Index1Length2.mp3": "6eeb0ce2172e450d88b19d402e02c1f2",
"assets/assets/sounds/Index1Length2.wav": "39eb8faadc824e8fed8d18866ce1a2d4",
"assets/assets/sounds/Index1Length3.mp3": "f370f9f0183a07c6cc00e955affbc01e",
"assets/assets/sounds/Index1Length3.wav": "3999d2770500a785fa6d10e571e16920",
"assets/assets/sounds/Index1Length4.mp3": "e5d740719ded61ef28034daa6ed4cd3a",
"assets/assets/sounds/Index1Length4.wav": "01ae3bf9420f02a7ae3542ec8d898485",
"assets/assets/sounds/Index1Length6.mp3": "1004361db8c5eeb1b64e3a3d77853ff5",
"assets/assets/sounds/Index1Length6.wav": "1edf1340657f9bdc3d048a1409c3b791",
"assets/assets/sounds/Index1Length8.mp3": "be21e7e6df7ce2eb601274e2468ed897",
"assets/assets/sounds/Index1Length8.wav": "23571245b6b38b08e7938f26dade427a",
"assets/assets/sounds/Index2Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index2Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index2Length1.mp3": "b7b56e91ad0a1cb6ec7e63f8756c1b58",
"assets/assets/sounds/Index2Length1.wav": "2b209a60499653a81c82b2e34cadee05",
"assets/assets/sounds/Index2Length12.mp3": "bd9ffe62e2b0c7a82f25fa1738828e28",
"assets/assets/sounds/Index2Length12.wav": "b77500c1be01fc23fc87df1d02a88584",
"assets/assets/sounds/Index2Length2.mp3": "8083762f4e3a9a774dfc6122cff605ee",
"assets/assets/sounds/Index2Length2.wav": "d3b4a0fbcc215c7c9b398b481b646e69",
"assets/assets/sounds/Index2Length3.mp3": "8a88a6a658bf5b0610f2fadf625dbf00",
"assets/assets/sounds/Index2Length3.wav": "9d4681203fa79fda8a799f8abb2274d0",
"assets/assets/sounds/Index2Length4.mp3": "49b941d0ee678e626f23293dd36c591d",
"assets/assets/sounds/Index2Length4.wav": "9bc307dfc2810972d7fb851780bd4856",
"assets/assets/sounds/Index2Length6.mp3": "71639c5e02fa08dee40c1ee830f2fb8f",
"assets/assets/sounds/Index2Length6.wav": "12256e9827dd704044361b6bea633697",
"assets/assets/sounds/Index2Length8.mp3": "c12df0b31937dd3ecbf3b48193813ab6",
"assets/assets/sounds/Index2Length8.wav": "236cc6760ff8709f610a5df29f7ee914",
"assets/assets/sounds/Index3Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index3Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index3Length1.mp3": "6180f3fef0ef1b6fb5980ac42f51a5d9",
"assets/assets/sounds/Index3Length1.wav": "25501e35dab4ac090f3d393961c71469",
"assets/assets/sounds/Index3Length12.mp3": "c0fa3d5b8c3a4e8e6696093b6b72615f",
"assets/assets/sounds/Index3Length12.wav": "6b153fdd906699556ac9c48fe901f824",
"assets/assets/sounds/Index3Length2.mp3": "8a7553895932642e4e174698ec39de4a",
"assets/assets/sounds/Index3Length2.wav": "3edf9bea4df56bd4e8298b080258e7ed",
"assets/assets/sounds/Index3Length3.mp3": "4e85fd8a5e08382f732414291a64b07c",
"assets/assets/sounds/Index3Length3.wav": "46134b6c36782d084478b5e9e6b762fe",
"assets/assets/sounds/Index3Length4.mp3": "c20a33fb6f3a855e3685b8af7ca339e5",
"assets/assets/sounds/Index3Length4.wav": "6f107aa30809dc0acc671da9d57e0c98",
"assets/assets/sounds/Index3Length6.mp3": "278941fc318cc1ef52ccd861defcc1b0",
"assets/assets/sounds/Index3Length6.wav": "665578c3526000a6bb0979a8b71826af",
"assets/assets/sounds/Index3Length8.mp3": "f16cd6015cafef8108d2d772f094c40c",
"assets/assets/sounds/Index3Length8.wav": "3d806f30a2daba348cc6b946cbcccdf7",
"assets/assets/sounds/Index4Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index4Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index4Length1.mp3": "a95777abf376ff915ebebe8a9c5caf01",
"assets/assets/sounds/Index4Length1.wav": "3743e7eb1b51781664c79375b942c6da",
"assets/assets/sounds/Index4Length12.mp3": "9d58fd8071bd7b87f7220eac0d2982c8",
"assets/assets/sounds/Index4Length12.wav": "c43ada913dc18cad452a60dd182ed75e",
"assets/assets/sounds/Index4Length2.mp3": "a8ae8d049f4fe9afa685c5f6531be708",
"assets/assets/sounds/Index4Length2.wav": "6cf0776fffa186c2c2a12558d83768a7",
"assets/assets/sounds/Index4Length3.mp3": "e285676b3ec5d397fcd9bc930062e633",
"assets/assets/sounds/Index4Length3.wav": "f849bddc85b2e7c6fd1f63bcbbd40a6d",
"assets/assets/sounds/Index4Length4.mp3": "2ccc787f5b1c580a87755a6b83a93407",
"assets/assets/sounds/Index4Length4.wav": "6b24a2da10a2f1c6a0b04191473341a1",
"assets/assets/sounds/Index4Length6.mp3": "078ce83a7da3cd3ea759552f2d142d94",
"assets/assets/sounds/Index4Length6.wav": "c458131ab9551df4f184a25f4e11b263",
"assets/assets/sounds/Index4Length8.mp3": "e10053a4a71e351a7dcaa49b031dc214",
"assets/assets/sounds/Index4Length8.wav": "81464c9774dad9c6a3580647ed9d3666",
"assets/assets/sounds/Index5Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index5Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index5Length1.mp3": "83bad692ac5ddd906b63502c03ed8765",
"assets/assets/sounds/Index5Length1.wav": "806ab8337ca57173787a4e702a1344ef",
"assets/assets/sounds/Index5Length12.mp3": "efb2f2e163ad1de059f2263fb2f5a724",
"assets/assets/sounds/Index5Length12.wav": "c1fe4a3b8bc188a2815d18aabb8cef2d",
"assets/assets/sounds/Index5Length2.mp3": "bd22f3e6b0ae8be0ce5b537f08117f27",
"assets/assets/sounds/Index5Length2.wav": "87db89ddecceb04ed380c9c0d4ff5859",
"assets/assets/sounds/Index5Length3.mp3": "f92684cbeac1e5f7ed04453b0443b85f",
"assets/assets/sounds/Index5Length3.wav": "b05ee87ff7b682b9297c55dcb98d93a1",
"assets/assets/sounds/Index5Length4.mp3": "8a0901954983c41547bb15ee397ca843",
"assets/assets/sounds/Index5Length4.wav": "3978dc493ca597ce2b1686c187b7de0c",
"assets/assets/sounds/Index5Length6.mp3": "f413b3b04528c9fbd365ab7dccc1c69f",
"assets/assets/sounds/Index5Length6.wav": "94340e0274991073a0cc1edbf4af7a3b",
"assets/assets/sounds/Index5Length8.mp3": "3eb76c2842608acbdf079e3f780896c7",
"assets/assets/sounds/Index5Length8.wav": "4ae7798d014cc138b73f42b33898b042",
"assets/assets/sounds/Index6Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index6Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index6Length1.mp3": "ddd5060fd8ac59f5060dd5ac6dd24610",
"assets/assets/sounds/Index6Length1.wav": "35f2f15487f285b565a6d84042e0d74f",
"assets/assets/sounds/Index6Length2.mp3": "e682d8c1562a92ef792f17b59b16a022",
"assets/assets/sounds/Index6Length2.wav": "396cfd69805ac29ee24ab5fd58364887",
"assets/assets/sounds/Index6Length3.mp3": "7ad9596da177702712d0e4f7a0a155a9",
"assets/assets/sounds/Index6Length3.wav": "4dcac0661072a743e9a60d37be96c83f",
"assets/assets/sounds/Index6Length4.mp3": "5b912e0c972ac0b48d15b6e67eeb1c18",
"assets/assets/sounds/Index6Length4.wav": "199f2803267b1bd86cf2aea43bd9e0e9",
"assets/assets/sounds/Index6Length6.mp3": "380c0559843a9a4f41f6596d4434d230",
"assets/assets/sounds/Index6Length6.wav": "7db149b1a69a631b7ac7d6eada0fe29b",
"assets/assets/sounds/Index6Length8.mp3": "44c4cbb16d41e2748fa4f349c7e701e3",
"assets/assets/sounds/Index6Length8.wav": "3c989280c19fa8396aaf3d5cd400ee52",
"assets/assets/sounds/Index7Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index7Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index7Length1.mp3": "d0ac10e03d16416bef0ca17e8b0c3c5f",
"assets/assets/sounds/Index7Length1.wav": "4ab63c3dcdbf66c8e8684e4571afdb31",
"assets/assets/sounds/Index7Length2.mp3": "576bc90a791cb424a095701429cf2fcc",
"assets/assets/sounds/Index7Length2.wav": "bda7c70ac50680c753f48c31c94abebd",
"assets/assets/sounds/Index7Length3.mp3": "84962dce46521851cf5f3487f7322052",
"assets/assets/sounds/Index7Length3.wav": "2e5c9f44fd79ead45bed0bf55a3be14d",
"assets/assets/sounds/Index7Length4.mp3": "18a44c9601c1aa7e542efa4f60824172",
"assets/assets/sounds/Index7Length4.wav": "1db2d77c01871ee551dd68f75f66c107",
"assets/assets/sounds/Index7Length6.mp3": "087c93823954335d0154fae49fa00935",
"assets/assets/sounds/Index7Length6.wav": "e4e82234ff5db0537f85be08df8cac2a",
"assets/assets/sounds/Index7Length8.mp3": "05f2ec2cf16fb7d5500ce5a534130822",
"assets/assets/sounds/Index7Length8.wav": "5a58689b15708f9b02869612ab96a54b",
"assets/assets/sounds/Index8Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index8Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index8Length1.mp3": "250e96b2cee989543b8eaedb95fa6f86",
"assets/assets/sounds/Index8Length1.wav": "72aed5bbbe74c1d238c625940216f407",
"assets/assets/sounds/Index8Length2.mp3": "433bb5949e31ebd0cff0dbb6cde60282",
"assets/assets/sounds/Index8Length2.wav": "8a27589e239f08d83a6eeb4b3a7f02e5",
"assets/assets/sounds/Index8Length3.mp3": "a73bfc080cb8dc2110629f8c4de392d8",
"assets/assets/sounds/Index8Length3.wav": "fe792670c83be5650b0a692e008c68e9",
"assets/assets/sounds/Index8Length4.mp3": "c5379ed9a9d94c0c741759931080f6f4",
"assets/assets/sounds/Index8Length4.wav": "c2c338ea17f946e033e63e740e84853e",
"assets/assets/sounds/Index8Length6.mp3": "2b7c508190cb4528f9e92d6ed38f8f02",
"assets/assets/sounds/Index8Length6.wav": "bf359945806a4c1a1af022d3ab7c8388",
"assets/assets/sounds/Index8Length8.mp3": "3ec6378b235a60ae7a3a407385ac5372",
"assets/assets/sounds/Index8Length8.wav": "7685dc4811b1713a82800e28d25e4165",
"assets/assets/sounds/Index9Length0.mp3": "f6ddca2916e05987f200760a09b4ad1b",
"assets/assets/sounds/Index9Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds/Index9Length1.mp3": "ad1e28c2f6401abfcb1abef9a6d3eb19",
"assets/assets/sounds/Index9Length1.wav": "ef3438e19d91637ec197ce7a0b5bfd0d",
"assets/assets/sounds/Index9Length2.mp3": "3b5861ee38f0bdef4bca6ee9ff0a90c4",
"assets/assets/sounds/Index9Length2.wav": "0b870a0d1df07e11fc413c41e70b5d53",
"assets/assets/sounds/Index9Length3.mp3": "b9341d73726df8701c694bf14b7f41e6",
"assets/assets/sounds/Index9Length3.wav": "f2cdebe3e1ce45cd4263368a22fe94ec",
"assets/assets/sounds/Index9Length4.mp3": "7be62617dbf8637fe824676fe45c3ae9",
"assets/assets/sounds/Index9Length4.wav": "dc5120192375369d8e2e447894b356b1",
"assets/assets/sounds/Index9Length6.mp3": "aabedeb73074d29ad5980ca7fc5f92f3",
"assets/assets/sounds/Index9Length6.wav": "590571d21627f180ab3f970abf145585",
"assets/assets/sounds/Index9Length8.mp3": "b6f16847f3a485528adc3cf31d30d46d",
"assets/assets/sounds/Index9Length8.wav": "1d3b950fd37d932669e0dac2054aefc1",
"assets/assets/sounds/metronome.mp3": "13c198624a06b56879ae0cb3d25cc23c",
"assets/assets/sounds/metronome.wav": "fe5ef28c9c447aef8116393c4921a937",
"assets/assets/sounds2/Index10Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index10Length1.wav": "3ed475516cbe7a1e0e6f67000a1ab31d",
"assets/assets/sounds2/Index10Length2.wav": "3f2f1c6078aefa34d8779a1892e4db31",
"assets/assets/sounds2/Index10Length3.wav": "0af6988df0c14399a5d88a036bf255f0",
"assets/assets/sounds2/Index10Length4.wav": "9873429f369b62bb2e57e0b7941801d7",
"assets/assets/sounds2/Index10Length6.wav": "77f3b206972a432f8675c04fe70a0a79",
"assets/assets/sounds2/Index11Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index11Length1.wav": "6a501a34fc9a20db6af1c60dbfe4b6fd",
"assets/assets/sounds2/Index11Length2.wav": "e00a3ceb788e173438bb6593ab08ea4a",
"assets/assets/sounds2/Index11Length3.wav": "94329910a697ef57af46cb5f4aa2ca2f",
"assets/assets/sounds2/Index11Length4.wav": "dc9b2560c48d7f2aa2eb0aaee88c063e",
"assets/assets/sounds2/Index11Length6.wav": "1aaa8ccc2109356e8a62a2521e24075f",
"assets/assets/sounds2/Index12Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index12Length1.wav": "e98d96a5fbc51f0b8026d77d074ef401",
"assets/assets/sounds2/Index12Length2.wav": "a5a0eaa1288ee4d5f9de47936f8ff80d",
"assets/assets/sounds2/Index12Length3.wav": "7fe849aa22b2200db6646e44b154e928",
"assets/assets/sounds2/Index12Length4.wav": "7bd44b97a747ec9bded2a3d0fbbf0ea9",
"assets/assets/sounds2/Index13Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index13Length1.wav": "a22d4c47803b9f26b2bf1d9d03bfbe48",
"assets/assets/sounds2/Index13Length2.wav": "eaf805fc203a8ded5bc31839c13eb53f",
"assets/assets/sounds2/Index13Length3.wav": "7130e8d3a501e0dee31a562c85959306",
"assets/assets/sounds2/Index13Length4.wav": "5f00a8f71048fa4df8a5d491561b5f03",
"assets/assets/sounds2/Index14Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index14Length1.wav": "19ae266dfc1f501a506f853a413f241a",
"assets/assets/sounds2/Index14Length2.wav": "ac20b4b6c79eb35ab081d3c8e3641602",
"assets/assets/sounds2/Index14Length3.wav": "b883caa920991085f672ad5c433e1f89",
"assets/assets/sounds2/Index15Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index15Length1.wav": "539dabe671e85b0f779810c8dbc5a984",
"assets/assets/sounds2/Index15Length2.wav": "d98e8ec394fa51d6973654b615f68a37",
"assets/assets/sounds2/Index16Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index16Length1.wav": "79d9e9230e1759a6707b3e682c4f42a1",
"assets/assets/sounds2/Index1Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index1Length1.wav": "6f580834f7f2435b36a9ea8b1fe67612",
"assets/assets/sounds2/Index1Length12.wav": "7bf303fde476426ff999e07c646b9b13",
"assets/assets/sounds2/Index1Length16.wav": "b2b86acbfac53debdb140b123ec43f0c",
"assets/assets/sounds2/Index1Length2.wav": "a6acb5b60ee9f3a39055861357781aac",
"assets/assets/sounds2/Index1Length3.wav": "20cbfb24b625cff6da5d75d8facc64be",
"assets/assets/sounds2/Index1Length4.wav": "0c07a9d22340176e15012b7d4cd8b5ac",
"assets/assets/sounds2/Index1Length6.wav": "b047d6a54f6f21912e45cd49e6775997",
"assets/assets/sounds2/Index1Length8.wav": "3e92bfe08f95695abfdd303cf0264267",
"assets/assets/sounds2/Index2Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index2Length1.wav": "29acd63dcfcc42096be8c9a560411982",
"assets/assets/sounds2/Index2Length12.wav": "4cbf4e2effd4c3107b4f47a3d6965b42",
"assets/assets/sounds2/Index2Length2.wav": "e6fb91ba8222da57cff777b5405ff3ff",
"assets/assets/sounds2/Index2Length3.wav": "54653b791a618df580861bbece5327a6",
"assets/assets/sounds2/Index2Length4.wav": "cd27c17a2ef27be346d5b183a02a90b7",
"assets/assets/sounds2/Index2Length6.wav": "86b6e8db230ec397342661446080bd76",
"assets/assets/sounds2/Index2Length8.wav": "1ea283cd08ac683052995e5f4adf6526",
"assets/assets/sounds2/Index3Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index3Length1.wav": "73ed07573185f288cc921b345196c7f0",
"assets/assets/sounds2/Index3Length12.wav": "3db15d7d02fc3f743ca1ab33d5887d56",
"assets/assets/sounds2/Index3Length2.wav": "11af4f4f0726fdb4ba721edd20644a86",
"assets/assets/sounds2/Index3Length3.wav": "b052e99888b9c6712c4e194baf2dc543",
"assets/assets/sounds2/Index3Length4.wav": "3606689bf2238ae87d5d013f8ac4feec",
"assets/assets/sounds2/Index3Length6.wav": "458266699b5ed5df72c7008f51d53528",
"assets/assets/sounds2/Index3Length8.wav": "d4d527f10deb7b3a1e4b57d47518a3f2",
"assets/assets/sounds2/Index4Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index4Length1.wav": "34d3f79e1f67f240027f2b2ac28a82da",
"assets/assets/sounds2/Index4Length12.wav": "58c0cf8e5d1ddd96f5d1ae976fbdd8f9",
"assets/assets/sounds2/Index4Length2.wav": "5f426e74f4a9760549ef6187162a3c27",
"assets/assets/sounds2/Index4Length3.wav": "b951685fbc175ce0a54a753b28745695",
"assets/assets/sounds2/Index4Length4.wav": "030ced990b929f6064527361aca709b4",
"assets/assets/sounds2/Index4Length6.wav": "12a1ed8d9a5ced564683117c686b8095",
"assets/assets/sounds2/Index4Length8.wav": "44f1e84bd9d6a98acdc0f911d03f290b",
"assets/assets/sounds2/Index5Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index5Length1.wav": "d1505e72b9d83c2fb9194ae56d0c5635",
"assets/assets/sounds2/Index5Length12.wav": "6a4c9eef1502b80b594e14ef961ee939",
"assets/assets/sounds2/Index5Length2.wav": "0a4ea1d9314bb7687f06de6d119b50f2",
"assets/assets/sounds2/Index5Length3.wav": "511706a99df3f16ff02c0ddf9d8ab2ea",
"assets/assets/sounds2/Index5Length4.wav": "8821b4ce38631ee60aabb58f1051dd91",
"assets/assets/sounds2/Index5Length6.wav": "f3ea88cb4f6ab202ea87fca50ba2038f",
"assets/assets/sounds2/Index5Length8.wav": "13c14a0de81f7d763d8367978acb6d56",
"assets/assets/sounds2/Index6Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index6Length1.wav": "39b751999684a55a6811894b690f0594",
"assets/assets/sounds2/Index6Length2.wav": "2149023d9c9a0d9637cb973fd138c978",
"assets/assets/sounds2/Index6Length3.wav": "56cd5765ac8f594f960ac46221b4d66b",
"assets/assets/sounds2/Index6Length4.wav": "9ad822943052e2804b43a38559f05894",
"assets/assets/sounds2/Index6Length6.wav": "719888646a15cc66a1a7c8ec60d545d0",
"assets/assets/sounds2/Index6Length8.wav": "85fd1e342358f8484f598f262e70bbe6",
"assets/assets/sounds2/Index7Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index7Length1.wav": "101131800de400313a318d9155b0f7f3",
"assets/assets/sounds2/Index7Length2.wav": "31645a3850f57521c5d7de7545f56c70",
"assets/assets/sounds2/Index7Length3.wav": "1b34db430f10c42cc8c21ff1395ece39",
"assets/assets/sounds2/Index7Length4.wav": "85bc98c7e66d3f2f749e95cf5044189e",
"assets/assets/sounds2/Index7Length6.wav": "9452b31d60b4487f5d9a6a73c4dfe3bb",
"assets/assets/sounds2/Index7Length8.wav": "419342fb664b53f9728e3c7da3a2f88a",
"assets/assets/sounds2/Index8Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index8Length1.wav": "2da361939213f0c4de002847f215e62e",
"assets/assets/sounds2/Index8Length2.wav": "91f97bde844944ec0ccea898fa0db24b",
"assets/assets/sounds2/Index8Length3.wav": "d927c67e7d5b40623570f13cdb919e7e",
"assets/assets/sounds2/Index8Length4.wav": "c46b81c0425fae723b1dbbc247f87cc9",
"assets/assets/sounds2/Index8Length6.wav": "22c435c434c35f08f5559431c00cb9b3",
"assets/assets/sounds2/Index8Length8.wav": "c7cf137faa1e28f2a92b11b17aa8516c",
"assets/assets/sounds2/Index9Length0.wav": "a08572a85fb267d8e71ca6aa0adbfabd",
"assets/assets/sounds2/Index9Length1.wav": "61b6ee69ddd6f03a1200d73225ee6c20",
"assets/assets/sounds2/Index9Length2.wav": "b683347feb0d4b6ae3c01415e7576c98",
"assets/assets/sounds2/Index9Length3.wav": "0b2c84806a88dd75c692981a8d1b2097",
"assets/assets/sounds2/Index9Length4.wav": "50bbaa62b25490e18100799e39e2954a",
"assets/assets/sounds2/Index9Length6.wav": "a3bd5e0eff62ded684a761aeb27ff115",
"assets/assets/sounds2/Index9Length8.wav": "1e1a7f8b22e37f872193eb6bb7c76d4a",
"assets/assets/sounds2/metronome.mp3": "6f7849267e8fd12056fcc28b2655965b",
"assets/assets/sounds_wav/Index10Length1.wav": "e3876e80d51303ca86beedab3f8ef10b",
"assets/assets/sounds_wav/Index10Length2.wav": "06402c9c967ec183ee951b3786fc8c74",
"assets/assets/sounds_wav/Index10Length3.wav": "024dcd98260d9cc4751ac6264f0fde0c",
"assets/assets/sounds_wav/Index10Length4.wav": "c4a6f3bd2e0195e77f5f38b4191b288e",
"assets/assets/sounds_wav/Index11Length2.wav": "42e8f17a8f797493edc44bcc479d60fa",
"assets/assets/sounds_wav/Index11Length3.wav": "a05e66d8ff1c998d9638567727e49645",
"assets/assets/sounds_wav/Index11Length4.wav": "584125ca091d3be316c08ee797719d14",
"assets/assets/sounds_wav/Index11Length6.wav": "6cb646a92523094c596756be14171dda",
"assets/assets/sounds_wav/Index12Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index12Length1.wav": "11247e748acdc0679524b3160b840563",
"assets/assets/sounds_wav/Index12Length2.wav": "29e138b05d825e94cb21b1a09a229d6e",
"assets/assets/sounds_wav/Index12Length3.wav": "a43d31bab7e6ba732333e914b21366ca",
"assets/assets/sounds_wav/Index12Length4.wav": "249220af94595507cf2b8be63ae06b53",
"assets/assets/sounds_wav/Index13Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index14Length1.wav": "aa7777a5e53a9514c89a01beedf05a13",
"assets/assets/sounds_wav/Index15Length2.wav": "7db7b43cab2c9294dd458e1d0b57dfae",
"assets/assets/sounds_wav/Index16Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index1Length4.wav": "01ae3bf9420f02a7ae3542ec8d898485",
"assets/assets/sounds_wav/Index1Length6.wav": "1edf1340657f9bdc3d048a1409c3b791",
"assets/assets/sounds_wav/Index1Length8.wav": "23571245b6b38b08e7938f26dade427a",
"assets/assets/sounds_wav/Index2Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index2Length12.wav": "b77500c1be01fc23fc87df1d02a88584",
"assets/assets/sounds_wav/Index2Length4.wav": "9bc307dfc2810972d7fb851780bd4856",
"assets/assets/sounds_wav/Index2Length6.wav": "12256e9827dd704044361b6bea633697",
"assets/assets/sounds_wav/Index2Length8.wav": "236cc6760ff8709f610a5df29f7ee914",
"assets/assets/sounds_wav/Index3Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index3Length1.wav": "25501e35dab4ac090f3d393961c71469",
"assets/assets/sounds_wav/Index3Length12.wav": "6b153fdd906699556ac9c48fe901f824",
"assets/assets/sounds_wav/Index3Length2.wav": "3edf9bea4df56bd4e8298b080258e7ed",
"assets/assets/sounds_wav/Index3Length3.wav": "46134b6c36782d084478b5e9e6b762fe",
"assets/assets/sounds_wav/Index3Length4.wav": "6f107aa30809dc0acc671da9d57e0c98",
"assets/assets/sounds_wav/Index3Length6.wav": "665578c3526000a6bb0979a8b71826af",
"assets/assets/sounds_wav/Index3Length8.wav": "3d806f30a2daba348cc6b946cbcccdf7",
"assets/assets/sounds_wav/Index4Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index4Length1.wav": "3743e7eb1b51781664c79375b942c6da",
"assets/assets/sounds_wav/Index4Length12.wav": "c43ada913dc18cad452a60dd182ed75e",
"assets/assets/sounds_wav/Index4Length2.wav": "6cf0776fffa186c2c2a12558d83768a7",
"assets/assets/sounds_wav/Index4Length3.wav": "f849bddc85b2e7c6fd1f63bcbbd40a6d",
"assets/assets/sounds_wav/Index4Length4.wav": "6b24a2da10a2f1c6a0b04191473341a1",
"assets/assets/sounds_wav/Index4Length6.wav": "c458131ab9551df4f184a25f4e11b263",
"assets/assets/sounds_wav/Index4Length8.wav": "81464c9774dad9c6a3580647ed9d3666",
"assets/assets/sounds_wav/Index5Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index5Length1.wav": "806ab8337ca57173787a4e702a1344ef",
"assets/assets/sounds_wav/Index5Length12.wav": "c1fe4a3b8bc188a2815d18aabb8cef2d",
"assets/assets/sounds_wav/Index5Length4.wav": "3978dc493ca597ce2b1686c187b7de0c",
"assets/assets/sounds_wav/Index5Length6.wav": "94340e0274991073a0cc1edbf4af7a3b",
"assets/assets/sounds_wav/Index5Length8.wav": "4ae7798d014cc138b73f42b33898b042",
"assets/assets/sounds_wav/Index6Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index6Length1.wav": "35f2f15487f285b565a6d84042e0d74f",
"assets/assets/sounds_wav/Index6Length2.wav": "396cfd69805ac29ee24ab5fd58364887",
"assets/assets/sounds_wav/Index6Length3.wav": "4dcac0661072a743e9a60d37be96c83f",
"assets/assets/sounds_wav/Index6Length4.wav": "199f2803267b1bd86cf2aea43bd9e0e9",
"assets/assets/sounds_wav/Index6Length6.wav": "7db149b1a69a631b7ac7d6eada0fe29b",
"assets/assets/sounds_wav/Index6Length8.wav": "3c989280c19fa8396aaf3d5cd400ee52",
"assets/assets/sounds_wav/Index7Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index7Length1.wav": "4ab63c3dcdbf66c8e8684e4571afdb31",
"assets/assets/sounds_wav/Index7Length2.wav": "bda7c70ac50680c753f48c31c94abebd",
"assets/assets/sounds_wav/Index7Length3.wav": "2e5c9f44fd79ead45bed0bf55a3be14d",
"assets/assets/sounds_wav/Index7Length4.wav": "1db2d77c01871ee551dd68f75f66c107",
"assets/assets/sounds_wav/Index7Length6.wav": "e4e82234ff5db0537f85be08df8cac2a",
"assets/assets/sounds_wav/Index7Length8.wav": "5a58689b15708f9b02869612ab96a54b",
"assets/assets/sounds_wav/Index8Length0.wav": "959c53595dba4a30fec8715149f2947a",
"assets/assets/sounds_wav/Index8Length1.wav": "72aed5bbbe74c1d238c625940216f407",
"assets/assets/sounds_wav/Index8Length2.wav": "8a27589e239f08d83a6eeb4b3a7f02e5",
"assets/assets/sounds_wav/Index8Length3.wav": "fe792670c83be5650b0a692e008c68e9",
"assets/assets/sounds_wav/Index8Length4.wav": "c2c338ea17f946e033e63e740e84853e",
"assets/assets/sounds_wav/Index9Length8.wav": "1d3b950fd37d932669e0dac2054aefc1",
"assets/assets/sounds_wav/metronome.wav": "fe5ef28c9c447aef8116393c4921a937",
"assets/FontManifest.json": "a5aee76623c8e3df7689a29833438d1a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Musisync-KVLZ.ttf": "21c3d12f3e3ccbae6bd5441f77538930",
"assets/fonts/Musisync-qYy6.ttf": "7663fd6b156c6882e4b66bd72556e0ee",
"assets/NOTICES": "55439c73829985bc2395c01359b5f9f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "44accf3461ecf2c358961f01450b2075",
"/": "44accf3461ecf2c358961f01450b2075",
"main.dart.js": "07b1b8355f7363b494e028a7611f59ee",
"manifest.json": "5c363b8fb1aa9ef207b2567ae5540884"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
