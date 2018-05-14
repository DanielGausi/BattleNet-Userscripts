// ==UserScript==
// @name         D3-Item-Guide-Wizard
// @namespace    http://eu.battle.net/
// @include      http*://eu.battle.net/forums/*
// @include      http*://us.battle.net/forums/*
// @version      0.2
// @description  Replace old links to items in the D3 Game Guide with the new linking format
// @author       Hebalon
// @grant        none
// ==/UserScript==

var aLinks = document.getElementsByTagName('a');

for(var i = 0; i < aLinks.length; i++){
    // bonus: correct very old skill/artisan links with http to https
    if (aLinks[i].href.includes("/class/")) {
        // correct http:// to https://
        aLinks[i].href = aLinks[i].href.replace("http://", "https://");
    }
    if (aLinks[i].href.includes("/artisan/")) {
        // correct http:// to https://
        aLinks[i].href = aLinks[i].href.replace("http://", "https://");
    }

    // do the item stuff
    if (aLinks[i].href.includes("/item/")) {
        // correct http:// to https://
        aLinks[i].href = aLinks[i].href.replace("http://", "https://");
        // check aaaaallllll the items
        if (aLinks[i].href.endsWith("item/bane-of-the-powerful")) {
aLinks[i].href = aLinks[i].href.replace("item/bane-of-the-powerful", "item/bane-of-the-powerful-Unique_Gem_001_x1");
} else 
if (aLinks[i].href.endsWith("item/gem-of-efficacious-toxin")) {
aLinks[i].href = aLinks[i].href.replace("item/gem-of-efficacious-toxin", "item/gem-of-efficacious-toxin-Unique_Gem_005_x1");
} else 
if (aLinks[i].href.endsWith("item/iceblink")) {
aLinks[i].href = aLinks[i].href.replace("item/iceblink", "item/iceblink-Unique_Gem_021_x1");
} else 
if (aLinks[i].href.endsWith("item/gogok-of-swiftness")) {
aLinks[i].href = aLinks[i].href.replace("item/gogok-of-swiftness", "item/gogok-of-swiftness-Unique_Gem_008_x1");
} else 
if (aLinks[i].href.endsWith("item/taeguk")) {
aLinks[i].href = aLinks[i].href.replace("item/taeguk", "item/taeguk-Unique_Gem_015_x1");
} else 
if (aLinks[i].href.endsWith("item/red-soul-shard")) {
aLinks[i].href = aLinks[i].href.replace("item/red-soul-shard", "item/red-soul-shard-Unique_Gem_022_x1");
} else 
if (aLinks[i].href.endsWith("item/boyarskys-chip")) {
aLinks[i].href = aLinks[i].href.replace("item/boyarskys-chip", "item/boyarskys-chip-Unique_Gem_020_x1");
} else 
if (aLinks[i].href.endsWith("item/bane-of-the-stricken")) {
aLinks[i].href = aLinks[i].href.replace("item/bane-of-the-stricken", "item/bane-of-the-stricken-Unique_Gem_018_x1");
} else 
if (aLinks[i].href.endsWith("item/invigorating-gemstone")) {
aLinks[i].href = aLinks[i].href.replace("item/invigorating-gemstone", "item/invigorating-gemstone-Unique_Gem_009_x1");
} else 
if (aLinks[i].href.endsWith("item/gem-of-ease")) {
aLinks[i].href = aLinks[i].href.replace("item/gem-of-ease", "item/gem-of-ease-Unique_Gem_003_x1");
} else 
if (aLinks[i].href.endsWith("item/simplicitys-strength")) {
aLinks[i].href = aLinks[i].href.replace("item/simplicitys-strength", "item/simplicitys-strength-Unique_Gem_013_x1");
} else 
if (aLinks[i].href.endsWith("item/mutilation-guard")) {
aLinks[i].href = aLinks[i].href.replace("item/mutilation-guard", "item/mutilation-guard-Unique_Gem_019_x1");
} else 
if (aLinks[i].href.endsWith("item/pain-enhancer")) {
aLinks[i].href = aLinks[i].href.replace("item/pain-enhancer", "item/pain-enhancer-Unique_Gem_006_x1");
} else 
if (aLinks[i].href.endsWith("item/molten-wildebeests-gizzard")) {
aLinks[i].href = aLinks[i].href.replace("item/molten-wildebeests-gizzard", "item/molten-wildebeests-gizzard-Unique_Gem_017_x1");
} else 
if (aLinks[i].href.endsWith("item/moratorium")) {
aLinks[i].href = aLinks[i].href.replace("item/moratorium", "item/moratorium-Unique_Gem_011_x1");
} else 
if (aLinks[i].href.endsWith("item/esoteric-alteration")) {
aLinks[i].href = aLinks[i].href.replace("item/esoteric-alteration", "item/esoteric-alteration-Unique_Gem_016_x1");
} else 
if (aLinks[i].href.endsWith("item/boon-of-the-hoarder")) {
aLinks[i].href = aLinks[i].href.replace("item/boon-of-the-hoarder", "item/boon-of-the-hoarder-Unique_Gem_014_x1");
} else 
if (aLinks[i].href.endsWith("item/zeis-stone-of-vengeance")) {
aLinks[i].href = aLinks[i].href.replace("item/zeis-stone-of-vengeance", "item/zeis-stone-of-vengeance-Unique_Gem_012_x1");
} else 
if (aLinks[i].href.endsWith("item/enforcer")) {
aLinks[i].href = aLinks[i].href.replace("item/enforcer", "item/enforcer-Unique_Gem_010_x1");
} else 
if (aLinks[i].href.endsWith("item/bane-of-the-trapped")) {
aLinks[i].href = aLinks[i].href.replace("item/bane-of-the-trapped", "item/bane-of-the-trapped-Unique_Gem_002_x1");
} else 
if (aLinks[i].href.endsWith("item/mirinae-teardrop-of-the-starweaver")) {
aLinks[i].href = aLinks[i].href.replace("item/mirinae-teardrop-of-the-starweaver", "item/mirinae-teardrop-of-the-starweaver-Unique_Gem_007_x1");
} else 
if (aLinks[i].href.endsWith("item/amethyst-x1_Amethyst_01")) {
aLinks[i].href = aLinks[i].href.replace("item/amethyst-x1_Amethyst_01", "item/amethyst-x1_Amethyst_01");
} else 
if (aLinks[i].href.endsWith("item/leorics-crown")) {
aLinks[i].href = aLinks[i].href.replace("item/leorics-crown", "item/leorics-crown-Unique_Helm_002_p1");
} else 
if (aLinks[i].href.endsWith("item/prides-fall")) {
aLinks[i].href = aLinks[i].href.replace("item/prides-fall", "item/prides-fall-Unique_Helm_103_x1");
} else 
if (aLinks[i].href.endsWith("item/broken-crown")) {
aLinks[i].href = aLinks[i].href.replace("item/broken-crown", "item/broken-crown-P2_Unique_Helm_001");
} else 
if (aLinks[i].href.endsWith("item/blind-faith")) {
aLinks[i].href = aLinks[i].href.replace("item/blind-faith", "item/blind-faith-Unique_Helm_007_x1");
} else 
if (aLinks[i].href.endsWith("item/deathseers-cowl")) {
aLinks[i].href = aLinks[i].href.replace("item/deathseers-cowl", "item/deathseers-cowl-Unique_Helm_102_x1");
} else 
if (aLinks[i].href.endsWith("item/warhelm-of-kassar")) {
aLinks[i].href = aLinks[i].href.replace("item/warhelm-of-kassar", "item/warhelm-of-kassar-P4_Unique_Helm_102");
} else 
if (aLinks[i].href.endsWith("item/visage-of-gunes")) {
aLinks[i].href = aLinks[i].href.replace("item/visage-of-gunes", "item/visage-of-gunes-P4_Unique_Helm_103");
} else 
if (aLinks[i].href.endsWith("item/mask-of-scarlet-death-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/mask-of-scarlet-death-P6_Necro", "item/mask-of-scarlet-death-P6_Necro_Unique_Helm_21");
} else 
if (aLinks[i].href.endsWith("item/skull-of-resonance")) {
aLinks[i].href = aLinks[i].href.replace("item/skull-of-resonance", "item/skull-of-resonance-Unique_Helm_004_x1");
} else 
if (aLinks[i].href.endsWith("item/mempo-of-twilight")) {
aLinks[i].href = aLinks[i].href.replace("item/mempo-of-twilight", "item/mempo-of-twilight-Unique_Helm_006_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/the-helm-of-command")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/the-helm-of-command", "artisan/blacksmith/recipe/the-helm-of-command");
} else 
if (aLinks[i].href.endsWith("item/andariels-visage")) {
aLinks[i].href = aLinks[i].href.replace("item/andariels-visage", "item/andariels-visage-Unique_Helm_003_p2");
} else 
if (aLinks[i].href.endsWith("item/fates-vow-P61_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/fates-vow-P61_Necro", "item/fates-vow-P61_Necro_Unique_Helm_22");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/the-helm-of-rule")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/the-helm-of-rule", "artisan/blacksmith/recipe/the-helm-of-rule");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cains-memory")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cains-memory", "artisan/blacksmith/recipe/cains-memory");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/aughilds-peak")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/aughilds-peak", "artisan/blacksmith/recipe/aughilds-peak");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/guardians-foresight")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/guardians-foresight", "artisan/blacksmith/recipe/guardians-foresight");
} else 
if (aLinks[i].href.endsWith("item/natalyas-sight")) {
aLinks[i].href = aLinks[i].href.replace("item/natalyas-sight", "item/natalyas-sight-Unique_Helm_009_x1");
} else 
if (aLinks[i].href.endsWith("item/tal-rashas-guise-of-wisdom")) {
aLinks[i].href = aLinks[i].href.replace("item/tal-rashas-guise-of-wisdom", "item/tal-rashas-guise-of-wisdom-Unique_Helm_010_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/sages-orbit")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/sages-orbit", "artisan/blacksmith/recipe/sages-orbit");
} else 
if (aLinks[i].href.endsWith("item/immortal-kings-triumph")) {
aLinks[i].href = aLinks[i].href.replace("item/immortal-kings-triumph", "item/immortal-kings-triumph-Unique_Helm_008_x1");
} else 
if (aLinks[i].href.endsWith("item/jade-harvesters-wisdom")) {
aLinks[i].href = aLinks[i].href.replace("item/jade-harvesters-wisdom", "item/jade-harvesters-wisdom-Unique_Helm_Set_09_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/guardians-gaze")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/guardians-gaze", "artisan/blacksmith/recipe/guardians-gaze");
} else 
if (aLinks[i].href.endsWith("item/sunwukos-crown")) {
aLinks[i].href = aLinks[i].href.replace("item/sunwukos-crown", "item/sunwukos-crown-Unique_Helm_Set_11_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cains-insight")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cains-insight", "artisan/blacksmith/recipe/cains-insight");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/sages-apogee")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/sages-apogee", "artisan/blacksmith/recipe/sages-apogee");
} else 
if (aLinks[i].href.endsWith("item/vyrs-sightless-skull")) {
aLinks[i].href = aLinks[i].href.replace("item/vyrs-sightless-skull", "item/vyrs-sightless-skull-Unique_Helm_Set_13_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/aughilds-spike")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/aughilds-spike", "artisan/blacksmith/recipe/aughilds-spike");
} else 
if (aLinks[i].href.endsWith("item/crown-of-the-invoker")) {
aLinks[i].href = aLinks[i].href.replace("item/crown-of-the-invoker", "item/crown-of-the-invoker-Unique_Helm_Set_12_x1");
} else 
if (aLinks[i].href.endsWith("item/the-shadows-mask")) {
aLinks[i].href = aLinks[i].href.replace("item/the-shadows-mask", "item/the-shadows-mask-Unique_Helm_Set_14_x1");
} else 
if (aLinks[i].href.endsWith("item/eyes-of-the-earth")) {
aLinks[i].href = aLinks[i].href.replace("item/eyes-of-the-earth", "item/eyes-of-the-earth-Unique_Helm_Set_15_x1");
} else 
if (aLinks[i].href.endsWith("item/raekors-will")) {
aLinks[i].href = aLinks[i].href.replace("item/raekors-will", "item/raekors-will-Unique_Helm_Set_05_x1");
} else 
if (aLinks[i].href.endsWith("item/helm-of-the-wastes")) {
aLinks[i].href = aLinks[i].href.replace("item/helm-of-the-wastes", "item/helm-of-the-wastes-Unique_Helm_Set_01_p2");
} else 
if (aLinks[i].href.endsWith("item/crown-of-the-light")) {
aLinks[i].href = aLinks[i].href.replace("item/crown-of-the-light", "item/crown-of-the-light-Unique_Helm_Set_03_p3");
} else 
if (aLinks[i].href.endsWith("item/rolands-visage")) {
aLinks[i].href = aLinks[i].href.replace("item/rolands-visage", "item/rolands-visage-Unique_Helm_Set_01_p1");
} else 
if (aLinks[i].href.endsWith("item/helm-of-akkhan")) {
aLinks[i].href = aLinks[i].href.replace("item/helm-of-akkhan", "item/helm-of-akkhan-Unique_Helm_Set_10_x1");
} else 
if (aLinks[i].href.endsWith("item/accursed-visage")) {
aLinks[i].href = aLinks[i].href.replace("item/accursed-visage", "item/accursed-visage-Unique_Helm_Set_03_p2");
} else 
if (aLinks[i].href.endsWith("item/marauders-visage")) {
aLinks[i].href = aLinks[i].href.replace("item/marauders-visage", "item/marauders-visage-Unique_Helm_Set_07_x1");
} else 
if (aLinks[i].href.endsWith("item/mask-of-the-searing-sky")) {
aLinks[i].href = aLinks[i].href.replace("item/mask-of-the-searing-sky", "item/mask-of-the-searing-sky-Unique_Helm_Set_08_x1");
} else 
if (aLinks[i].href.endsWith("item/ulianas-spirit")) {
aLinks[i].href = aLinks[i].href.replace("item/ulianas-spirit", "item/ulianas-spirit-Unique_Helm_Set_01_p3");
} else 
if (aLinks[i].href.endsWith("item/firebirds-plume")) {
aLinks[i].href = aLinks[i].href.replace("item/firebirds-plume", "item/firebirds-plume-Unique_Helm_Set_06_x1");
} else 
if (aLinks[i].href.endsWith("item/shrouded-mask")) {
aLinks[i].href = aLinks[i].href.replace("item/shrouded-mask", "item/shrouded-mask-Unique_Helm_Set_02_p2");
} else 
if (aLinks[i].href.endsWith("item/arachyrs-visage")) {
aLinks[i].href = aLinks[i].href.replace("item/arachyrs-visage", "item/arachyrs-visage-Unique_Helm_Set_02_p3");
} else 
if (aLinks[i].href.endsWith("item/helltooth-mask")) {
aLinks[i].href = aLinks[i].href.replace("item/helltooth-mask", "item/helltooth-mask-Unique_Helm_Set_16_x1");
} else 
if (aLinks[i].href.endsWith("item/tragouls-guise-P6_Necro_Set_2_Helm")) {
aLinks[i].href = aLinks[i].href.replace("item/tragouls-guise-P6_Necro_Set_2_Helm", "item/tragouls-guise-P6_Necro_Set_2_Helm");
} else 
if (aLinks[i].href.endsWith("item/inariuss-understanding-P6_Necro_Set_3_Helm")) {
aLinks[i].href = aLinks[i].href.replace("item/inariuss-understanding-P6_Necro_Set_3_Helm", "item/inariuss-understanding-P6_Necro_Set_3_Helm");
} else 
if (aLinks[i].href.endsWith("item/pestilence-mask-P6_Necro_Set_4_Helm")) {
aLinks[i].href = aLinks[i].href.replace("item/pestilence-mask-P6_Necro_Set_4_Helm", "item/pestilence-mask-P6_Necro_Set_4_Helm");
} else 
if (aLinks[i].href.endsWith("item/rathmas-skull-helm-P6_Necro_Set_1_Helm")) {
aLinks[i].href = aLinks[i].href.replace("item/rathmas-skull-helm-P6_Necro_Set_1_Helm", "item/rathmas-skull-helm-P6_Necro_Set_1_Helm");
} else 
if (aLinks[i].href.endsWith("item/homing-pads")) {
aLinks[i].href = aLinks[i].href.replace("item/homing-pads", "item/homing-pads-Unique_Shoulder_001_x1");
} else 
if (aLinks[i].href.endsWith("item/pauldrons-of-the-skeleton-king")) {
aLinks[i].href = aLinks[i].href.replace("item/pauldrons-of-the-skeleton-king", "item/pauldrons-of-the-skeleton-king-Unique_Shoulder_103_x1");
} else 
if (aLinks[i].href.endsWith("item/razeths-volition-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/razeths-volition-P6_Necro", "item/razeths-volition-P6_Necro_Unique_Shoulders_22");
} else 
if (aLinks[i].href.endsWith("item/death-watch-mantle")) {
aLinks[i].href = aLinks[i].href.replace("item/death-watch-mantle", "item/death-watch-mantle-Unique_Shoulder_002_p2");
} else 
if (aLinks[i].href.endsWith("item/corpsewhisper-pauldrons-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/corpsewhisper-pauldrons-P6_Necro", "item/corpsewhisper-pauldrons-P6_Necro_Unique_Shoulders_21");
} else 
if (aLinks[i].href.endsWith("item/lefebvres-soliloquy")) {
aLinks[i].href = aLinks[i].href.replace("item/lefebvres-soliloquy", "item/lefebvres-soliloquy-P4_Unique_Shoulder_101");
} else 
if (aLinks[i].href.endsWith("item/fury-of-the-ancients")) {
aLinks[i].href = aLinks[i].href.replace("item/fury-of-the-ancients", "item/fury-of-the-ancients-P3_Unique_Shoulder_102");
} else 
if (aLinks[i].href.endsWith("item/mantle-of-channeling")) {
aLinks[i].href = aLinks[i].href.replace("item/mantle-of-channeling", "item/mantle-of-channeling-P4_Unique_Shoulder_103");
} else 
if (aLinks[i].href.endsWith("item/spaulders-of-zakara")) {
aLinks[i].href = aLinks[i].href.replace("item/spaulders-of-zakara", "item/spaulders-of-zakara-Unique_Shoulder_102_x1");
} else 
if (aLinks[i].href.endsWith("item/vile-ward")) {
aLinks[i].href = aLinks[i].href.replace("item/vile-ward", "item/vile-ward-Unique_Shoulder_003_p1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/seven-sins")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/seven-sins", "artisan/blacksmith/recipe/seven-sins");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/corruption")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/corruption", "artisan/blacksmith/recipe/corruption");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/borns-impunity")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/borns-impunity", "artisan/blacksmith/recipe/borns-impunity");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/aughilds-reign")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/aughilds-reign", "artisan/blacksmith/recipe/aughilds-reign");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ashearas-guard")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ashearas-guard", "artisan/blacksmith/recipe/ashearas-guard");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-flight")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-flight", "artisan/blacksmith/recipe/demons-flight");
} else 
if (aLinks[i].href.endsWith("item/burden-of-the-invoker")) {
aLinks[i].href = aLinks[i].href.replace("item/burden-of-the-invoker", "item/burden-of-the-invoker-Unique_Shoulder_Set_12_x1");
} else 
if (aLinks[i].href.endsWith("item/spires-of-the-earth")) {
aLinks[i].href = aLinks[i].href.replace("item/spires-of-the-earth", "item/spires-of-the-earth-Unique_Shoulder_Set_15_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-aileron")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-aileron", "artisan/blacksmith/recipe/demons-aileron");
} else 
if (aLinks[i].href.endsWith("item/sunwukos-balance")) {
aLinks[i].href = aLinks[i].href.replace("item/sunwukos-balance", "item/sunwukos-balance-Unique_Shoulder_Set_11_x1");
} else 
if (aLinks[i].href.endsWith("item/jade-harvesters-joy")) {
aLinks[i].href = aLinks[i].href.replace("item/jade-harvesters-joy", "item/jade-harvesters-joy-Unique_Shoulder_Set_09_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/borns-privilege")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/borns-privilege", "artisan/blacksmith/recipe/borns-privilege");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ashearas-custodian")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ashearas-custodian", "artisan/blacksmith/recipe/ashearas-custodian");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/aughilds-power")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/aughilds-power", "artisan/blacksmith/recipe/aughilds-power");
} else 
if (aLinks[i].href.endsWith("item/vyrs-proud-pauldrons")) {
aLinks[i].href = aLinks[i].href.replace("item/vyrs-proud-pauldrons", "item/vyrs-proud-pauldrons-Unique_Shoulder_Set_13_x1");
} else 
if (aLinks[i].href.endsWith("item/the-shadows-burden")) {
aLinks[i].href = aLinks[i].href.replace("item/the-shadows-burden", "item/the-shadows-burden-Unique_Shoulder_Set_14_x1");
} else 
if (aLinks[i].href.endsWith("item/raekors-burden")) {
aLinks[i].href = aLinks[i].href.replace("item/raekors-burden", "item/raekors-burden-Unique_Shoulder_Set_05_x1");
} else 
if (aLinks[i].href.endsWith("item/pauldrons-of-the-wastes")) {
aLinks[i].href = aLinks[i].href.replace("item/pauldrons-of-the-wastes", "item/pauldrons-of-the-wastes-Unique_Shoulder_Set_01_p2");
} else 
if (aLinks[i].href.endsWith("item/rolands-mantle")) {
aLinks[i].href = aLinks[i].href.replace("item/rolands-mantle", "item/rolands-mantle-Unique_Shoulder_Set_01_p1");
} else 
if (aLinks[i].href.endsWith("item/mountain-of-the-light")) {
aLinks[i].href = aLinks[i].href.replace("item/mountain-of-the-light", "item/mountain-of-the-light-Unique_Shoulder_Set_03_p3");
} else 
if (aLinks[i].href.endsWith("item/pauldrons-of-akkhan")) {
aLinks[i].href = aLinks[i].href.replace("item/pauldrons-of-akkhan", "item/pauldrons-of-akkhan-Unique_Shoulder_Set_10_x1");
} else 
if (aLinks[i].href.endsWith("item/unsanctified-shoulders")) {
aLinks[i].href = aLinks[i].href.replace("item/unsanctified-shoulders", "item/unsanctified-shoulders-Unique_Shoulder_Set_03_p2");
} else 
if (aLinks[i].href.endsWith("item/marauders-spines")) {
aLinks[i].href = aLinks[i].href.replace("item/marauders-spines", "item/marauders-spines-Unique_Shoulder_Set_07_x1");
} else 
if (aLinks[i].href.endsWith("item/mantle-of-the-upsidedown-sinners")) {
aLinks[i].href = aLinks[i].href.replace("item/mantle-of-the-upsidedown-sinners", "item/mantle-of-the-upsidedown-sinners-Unique_Shoulder_Set_08_x1");
} else 
if (aLinks[i].href.endsWith("item/ulianas-strength")) {
aLinks[i].href = aLinks[i].href.replace("item/ulianas-strength", "item/ulianas-strength-Unique_Shoulder_Set_01_p3");
} else 
if (aLinks[i].href.endsWith("item/firebirds-pinions")) {
aLinks[i].href = aLinks[i].href.replace("item/firebirds-pinions", "item/firebirds-pinions-Unique_Shoulder_Set_06_x1");
} else 
if (aLinks[i].href.endsWith("item/dashing-pauldrons-of-despair")) {
aLinks[i].href = aLinks[i].href.replace("item/dashing-pauldrons-of-despair", "item/dashing-pauldrons-of-despair-Unique_Shoulder_Set_02_p2");
} else 
if (aLinks[i].href.endsWith("item/helltooth-mantle")) {
aLinks[i].href = aLinks[i].href.replace("item/helltooth-mantle", "item/helltooth-mantle-Unique_Shoulder_Set_16_x1");
} else 
if (aLinks[i].href.endsWith("item/arachyrs-mantle")) {
aLinks[i].href = aLinks[i].href.replace("item/arachyrs-mantle", "item/arachyrs-mantle-Unique_Shoulder_Set_02_p3");
} else 
if (aLinks[i].href.endsWith("item/pestilence-defense-P6_Necro_Set_4_Shoulders")) {
aLinks[i].href = aLinks[i].href.replace("item/pestilence-defense-P6_Necro_Set_4_Shoulders", "item/pestilence-defense-P6_Necro_Set_4_Shoulders");
} else 
if (aLinks[i].href.endsWith("item/rathmas-spikes-P6_Necro_Set_1_Shoulders")) {
aLinks[i].href = aLinks[i].href.replace("item/rathmas-spikes-P6_Necro_Set_1_Shoulders", "item/rathmas-spikes-P6_Necro_Set_1_Shoulders");
} else 
if (aLinks[i].href.endsWith("item/tragouls-heart-P6_Necro_Set_2_Shoulders")) {
aLinks[i].href = aLinks[i].href.replace("item/tragouls-heart-P6_Necro_Set_2_Shoulders", "item/tragouls-heart-P6_Necro_Set_2_Shoulders");
} else 
if (aLinks[i].href.endsWith("item/inariuss-martyrdom-P6_Necro_Set_3_Shoulders")) {
aLinks[i].href = aLinks[i].href.replace("item/inariuss-martyrdom-P6_Necro_Set_3_Shoulders", "item/inariuss-martyrdom-P6_Necro_Set_3_Shoulders");
} else 
if (aLinks[i].href.endsWith("item/heart-of-iron")) {
aLinks[i].href = aLinks[i].href.replace("item/heart-of-iron", "item/heart-of-iron-P4_Unique_Chest_018");
} else 
if (aLinks[i].href.endsWith("item/aquila-cuirass")) {
aLinks[i].href = aLinks[i].href.replace("item/aquila-cuirass", "item/aquila-cuirass-P4_Unique_Chest_012");
} else 
if (aLinks[i].href.endsWith("item/chaingmail")) {
aLinks[i].href = aLinks[i].href.replace("item/chaingmail", "item/chaingmail-Unique_Chest_010_x1");
} else 
if (aLinks[i].href.endsWith("item/shi-mizus-haori")) {
aLinks[i].href = aLinks[i].href.replace("item/shi-mizus-haori", "item/shi-mizus-haori-Unique_Chest_101_x1");
} else 
if (aLinks[i].href.endsWith("item/cindercoat")) {
aLinks[i].href = aLinks[i].href.replace("item/cindercoat", "item/cindercoat-Unique_Chest_006_x1");
} else 
if (aLinks[i].href.endsWith("item/goldskin")) {
aLinks[i].href = aLinks[i].href.replace("item/goldskin", "item/goldskin-Unique_Chest_001_x1");
} else 
if (aLinks[i].href.endsWith("item/tyraels-might")) {
aLinks[i].href = aLinks[i].href.replace("item/tyraels-might", "item/tyraels-might-Unique_Chest_002_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/robes-of-the-rydraelm")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/robes-of-the-rydraelm", "artisan/blacksmith/recipe/robes-of-the-rydraelm");
} else 
if (aLinks[i].href.endsWith("item/bloodsong-mail-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/bloodsong-mail-P6_Necro", "item/bloodsong-mail-P6_Necro_Unique_Chest_21");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/mantle-of-the-rydraelm")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/mantle-of-the-rydraelm", "artisan/blacksmith/recipe/mantle-of-the-rydraelm");
} else 
if (aLinks[i].href.endsWith("item/armor-of-the-kind-regent")) {
aLinks[i].href = aLinks[i].href.replace("item/armor-of-the-kind-regent", "item/armor-of-the-kind-regent-Unique_Chest_102_x1");
} else 
if (aLinks[i].href.endsWith("item/requiem-cereplate-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/requiem-cereplate-P6_Necro", "item/requiem-cereplate-P6_Necro_Unique_Chest_22");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/borns-heart-of-steel")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/borns-heart-of-steel", "artisan/blacksmith/recipe/borns-heart-of-steel");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/aughilds-dominion")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/aughilds-dominion", "artisan/blacksmith/recipe/aughilds-dominion");
} else 
if (aLinks[i].href.endsWith("item/zunimassas-marrow")) {
aLinks[i].href = aLinks[i].href.replace("item/zunimassas-marrow", "item/zunimassas-marrow-Unique_Chest_016_x1");
} else 
if (aLinks[i].href.endsWith("item/immortal-kings-eternal-reign")) {
aLinks[i].href = aLinks[i].href.replace("item/immortal-kings-eternal-reign", "item/immortal-kings-eternal-reign-Unique_Chest_013_x1");
} else 
if (aLinks[i].href.endsWith("item/blackthornes-surcoat")) {
aLinks[i].href = aLinks[i].href.replace("item/blackthornes-surcoat", "item/blackthornes-surcoat-Unique_ChestArmor_028_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-heart")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-heart", "artisan/blacksmith/recipe/demons-heart");
} else 
if (aLinks[i].href.endsWith("item/tal-rashas-relentless-pursuit")) {
aLinks[i].href = aLinks[i].href.replace("item/tal-rashas-relentless-pursuit", "item/tal-rashas-relentless-pursuit-Unique_Chest_014_x1");
} else 
if (aLinks[i].href.endsWith("item/innas-vast-expanse")) {
aLinks[i].href = aLinks[i].href.replace("item/innas-vast-expanse", "item/innas-vast-expanse-Unique_Chest_015_x1");
} else 
if (aLinks[i].href.endsWith("item/jade-harvesters-peace")) {
aLinks[i].href = aLinks[i].href.replace("item/jade-harvesters-peace", "item/jade-harvesters-peace-Unique_Chest_Set_09_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-marrow")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-marrow", "artisan/blacksmith/recipe/demons-marrow");
} else 
if (aLinks[i].href.endsWith("item/spirit-of-the-earth")) {
aLinks[i].href = aLinks[i].href.replace("item/spirit-of-the-earth", "item/spirit-of-the-earth-Unique_Chest_Set_15_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/borns-frozen-soul")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/borns-frozen-soul", "artisan/blacksmith/recipe/borns-frozen-soul");
} else 
if (aLinks[i].href.endsWith("item/the-shadows-bane")) {
aLinks[i].href = aLinks[i].href.replace("item/the-shadows-bane", "item/the-shadows-bane-Unique_Chest_Set_14_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/aughilds-rule")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/aughilds-rule", "artisan/blacksmith/recipe/aughilds-rule");
} else 
if (aLinks[i].href.endsWith("item/sunwukos-soul")) {
aLinks[i].href = aLinks[i].href.replace("item/sunwukos-soul", "item/sunwukos-soul-Unique_Chest_Set_11_x1");
} else 
if (aLinks[i].href.endsWith("item/vyrs-astonishing-aura")) {
aLinks[i].href = aLinks[i].href.replace("item/vyrs-astonishing-aura", "item/vyrs-astonishing-aura-Unique_Chest_Set_13_x1");
} else 
if (aLinks[i].href.endsWith("item/cuirass-of-the-wastes")) {
aLinks[i].href = aLinks[i].href.replace("item/cuirass-of-the-wastes", "item/cuirass-of-the-wastes-Unique_Chest_Set_01_p2");
} else 
if (aLinks[i].href.endsWith("item/raekors-heart")) {
aLinks[i].href = aLinks[i].href.replace("item/raekors-heart", "item/raekors-heart-Unique_Chest_Set_05_x1");
} else 
if (aLinks[i].href.endsWith("item/rolands-bearing")) {
aLinks[i].href = aLinks[i].href.replace("item/rolands-bearing", "item/rolands-bearing-Unique_Chest_Set_01_p1");
} else 
if (aLinks[i].href.endsWith("item/breastplate-of-akkhan")) {
aLinks[i].href = aLinks[i].href.replace("item/breastplate-of-akkhan", "item/breastplate-of-akkhan-Unique_Chest_Set_10_x1");
} else 
if (aLinks[i].href.endsWith("item/heart-of-the-light")) {
aLinks[i].href = aLinks[i].href.replace("item/heart-of-the-light", "item/heart-of-the-light-Unique_Chest_Set_03_p3");
} else 
if (aLinks[i].href.endsWith("item/marauders-carapace")) {
aLinks[i].href = aLinks[i].href.replace("item/marauders-carapace", "item/marauders-carapace-Unique_Chest_Set_07_x1");
} else 
if (aLinks[i].href.endsWith("item/ulianas-heart")) {
aLinks[i].href = aLinks[i].href.replace("item/ulianas-heart", "item/ulianas-heart-Unique_Chest_Set_01_p3");
} else 
if (aLinks[i].href.endsWith("item/heart-of-the-crashing-wave")) {
aLinks[i].href = aLinks[i].href.replace("item/heart-of-the-crashing-wave", "item/heart-of-the-crashing-wave-Unique_Chest_Set_08_x1");
} else 
if (aLinks[i].href.endsWith("item/firebirds-breast")) {
aLinks[i].href = aLinks[i].href.replace("item/firebirds-breast", "item/firebirds-breast-Unique_Chest_Set_06_x1");
} else 
if (aLinks[i].href.endsWith("item/harness-of-truth")) {
aLinks[i].href = aLinks[i].href.replace("item/harness-of-truth", "item/harness-of-truth-Unique_Chest_Set_02_p2");
} else 
if (aLinks[i].href.endsWith("item/helltooth-tunic")) {
aLinks[i].href = aLinks[i].href.replace("item/helltooth-tunic", "item/helltooth-tunic-Unique_Chest_Set_16_x1");
} else 
if (aLinks[i].href.endsWith("item/arachyrs-carapace")) {
aLinks[i].href = aLinks[i].href.replace("item/arachyrs-carapace", "item/arachyrs-carapace-Unique_Chest_Set_02_p3");
} else 
if (aLinks[i].href.endsWith("item/tragouls-scales-P6_Necro_Set_2_Chest")) {
aLinks[i].href = aLinks[i].href.replace("item/tragouls-scales-P6_Necro_Set_2_Chest", "item/tragouls-scales-P6_Necro_Set_2_Chest");
} else 
if (aLinks[i].href.endsWith("item/rathmas-ribcage-plate-P6_Necro_Set_1_Chest")) {
aLinks[i].href = aLinks[i].href.replace("item/rathmas-ribcage-plate-P6_Necro_Set_1_Chest", "item/rathmas-ribcage-plate-P6_Necro_Set_1_Chest");
} else 
if (aLinks[i].href.endsWith("item/pestilence-robe-P6_Necro_Set_4_Chest")) {
aLinks[i].href = aLinks[i].href.replace("item/pestilence-robe-P6_Necro_Set_4_Chest", "item/pestilence-robe-P6_Necro_Set_4_Chest");
} else 
if (aLinks[i].href.endsWith("item/inariuss-conviction-P6_Necro_Set_3_Chest")) {
aLinks[i].href = aLinks[i].href.replace("item/inariuss-conviction-P6_Necro_Set_3_Chest", "item/inariuss-conviction-P6_Necro_Set_3_Chest");
} else 
if (aLinks[i].href.endsWith("item/ashnagarrs-blood-bracer")) {
aLinks[i].href = aLinks[i].href.replace("item/ashnagarrs-blood-bracer", "item/ashnagarrs-blood-bracer-P4_Unique_Bracer_004");
} else 
if (aLinks[i].href.endsWith("item/gungdo-gear")) {
aLinks[i].href = aLinks[i].href.replace("item/gungdo-gear", "item/gungdo-gear-P2_Unique_Bracer_006");
} else 
if (aLinks[i].href.endsWith("item/cesars-memento")) {
aLinks[i].href = aLinks[i].href.replace("item/cesars-memento", "item/cesars-memento-P61_Unique_Bracer_107");
} else 
if (aLinks[i].href.endsWith("item/sanguinary-vambraces")) {
aLinks[i].href = aLinks[i].href.replace("item/sanguinary-vambraces", "item/sanguinary-vambraces-Unique_Bracer_105_x1");
} else 
if (aLinks[i].href.endsWith("item/pintos-pride")) {
aLinks[i].href = aLinks[i].href.replace("item/pintos-pride", "item/pintos-pride-P4_Unique_Bracer_105");
} else 
if (aLinks[i].href.endsWith("item/bindings-of-the-lesser-gods")) {
aLinks[i].href = aLinks[i].href.replace("item/bindings-of-the-lesser-gods", "item/bindings-of-the-lesser-gods-P4_Unique_Bracer_108");
} else 
if (aLinks[i].href.endsWith("item/akkhans-manacles")) {
aLinks[i].href = aLinks[i].href.replace("item/akkhans-manacles", "item/akkhans-manacles-P4_Unique_Bracer_103");
} else 
if (aLinks[i].href.endsWith("item/vambraces-of-sescheron")) {
aLinks[i].href = aLinks[i].href.replace("item/vambraces-of-sescheron", "item/vambraces-of-sescheron-P4_Unique_Bracer_106");
} else 
if (aLinks[i].href.endsWith("item/bracer-of-fury")) {
aLinks[i].href = aLinks[i].href.replace("item/bracer-of-fury", "item/bracer-of-fury-P61_Unique_Bracer_104");
} else 
if (aLinks[i].href.endsWith("item/warzechian-armguards")) {
aLinks[i].href = aLinks[i].href.replace("item/warzechian-armguards", "item/warzechian-armguards-Unique_Bracer_101_x1");
} else 
if (aLinks[i].href.endsWith("item/nemesis-bracers")) {
aLinks[i].href = aLinks[i].href.replace("item/nemesis-bracers", "item/nemesis-bracers-Unique_Bracer_106_x1");
} else 
if (aLinks[i].href.endsWith("item/custerian-wristguards")) {
aLinks[i].href = aLinks[i].href.replace("item/custerian-wristguards", "item/custerian-wristguards-Unique_Bracer_107_x1");
} else 
if (aLinks[i].href.endsWith("item/ancient-parthan-defenders")) {
aLinks[i].href = aLinks[i].href.replace("item/ancient-parthan-defenders", "item/ancient-parthan-defenders-Unique_Bracer_102_x1");
} else 
if (aLinks[i].href.endsWith("item/promise-of-glory")) {
aLinks[i].href = aLinks[i].href.replace("item/promise-of-glory", "item/promise-of-glory-Unique_Bracer_002_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/wondrous-deflectors")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/wondrous-deflectors", "artisan/blacksmith/recipe/wondrous-deflectors");
} else 
if (aLinks[i].href.endsWith("item/strongarm-bracers")) {
aLinks[i].href = aLinks[i].href.replace("item/strongarm-bracers", "item/strongarm-bracers-Unique_Bracer_007_x1");
} else 
if (aLinks[i].href.endsWith("item/lacuni-prowlers")) {
aLinks[i].href = aLinks[i].href.replace("item/lacuni-prowlers", "item/lacuni-prowlers-Unique_Bracer_005_x1");
} else 
if (aLinks[i].href.endsWith("item/coils-of-the-first-spider")) {
aLinks[i].href = aLinks[i].href.replace("item/coils-of-the-first-spider", "item/coils-of-the-first-spider-P3_Unique_Bracer_107");
} else 
if (aLinks[i].href.endsWith("item/wraps-of-clarity")) {
aLinks[i].href = aLinks[i].href.replace("item/wraps-of-clarity", "item/wraps-of-clarity-P61_Unique_Bracer_103");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/kethryes-splint")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/kethryes-splint", "artisan/blacksmith/recipe/kethryes-splint");
} else 
if (aLinks[i].href.endsWith("item/jerams-bracers")) {
aLinks[i].href = aLinks[i].href.replace("item/jerams-bracers", "item/jerams-bracers-P3_Unique_Bracer_106");
} else 
if (aLinks[i].href.endsWith("item/bracers-of-the-first-men")) {
aLinks[i].href = aLinks[i].href.replace("item/bracers-of-the-first-men", "item/bracers-of-the-first-men-P61_Unique_Bracer_105");
} else 
if (aLinks[i].href.endsWith("item/ranslors-folly")) {
aLinks[i].href = aLinks[i].href.replace("item/ranslors-folly", "item/ranslors-folly-P61_Unique_Bracer_108_x1");
} else 
if (aLinks[i].href.endsWith("item/gabriels-vambraces")) {
aLinks[i].href = aLinks[i].href.replace("item/gabriels-vambraces", "item/gabriels-vambraces-P3_Unique_Bracer_101");
} else 
if (aLinks[i].href.endsWith("item/tragoul-coils")) {
aLinks[i].href = aLinks[i].href.replace("item/tragoul-coils", "item/tragoul-coils-P42_Unique_Bracer_SpikeTrap");
} else 
if (aLinks[i].href.endsWith("item/drakons-lesson")) {
aLinks[i].href = aLinks[i].href.replace("item/drakons-lesson", "item/drakons-lesson-P4_Unique_Bracer_110");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/reapers-wraps")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/reapers-wraps", "artisan/blacksmith/recipe/reapers-wraps");
} else 
if (aLinks[i].href.endsWith("item/bracers-of-destruction")) {
aLinks[i].href = aLinks[i].href.replace("item/bracers-of-destruction", "item/bracers-of-destruction-P61_Unique_Bracer_100");
} else 
if (aLinks[i].href.endsWith("item/lakumbas-ornament")) {
aLinks[i].href = aLinks[i].href.replace("item/lakumbas-ornament", "item/lakumbas-ornament-P4_Unique_Bracer_102");
} else 
if (aLinks[i].href.endsWith("item/spirit-guards")) {
aLinks[i].href = aLinks[i].href.replace("item/spirit-guards", "item/spirit-guards-P61_Unique_Bracer_109");
} else 
if (aLinks[i].href.endsWith("item/skulars-salvation")) {
aLinks[i].href = aLinks[i].href.replace("item/skulars-salvation", "item/skulars-salvation-P4_Unique_Bracer_101");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/aughilds-ultimatum")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/aughilds-ultimatum", "artisan/blacksmith/recipe/aughilds-ultimatum");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/guardians-deflector")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/guardians-deflector", "artisan/blacksmith/recipe/guardians-deflector");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-revenge")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-revenge", "artisan/blacksmith/recipe/demons-revenge");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/aughilds-search")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/aughilds-search", "artisan/blacksmith/recipe/aughilds-search");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/guardians-aversion")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/guardians-aversion", "artisan/blacksmith/recipe/guardians-aversion");
} else 
if (aLinks[i].href.endsWith("item/shackles-of-the-invoker")) {
aLinks[i].href = aLinks[i].href.replace("item/shackles-of-the-invoker", "item/shackles-of-the-invoker-Unique_Bracer_Set_12_x1");
} else 
if (aLinks[i].href.endsWith("item/krelms-buff-bracers")) {
aLinks[i].href = aLinks[i].href.replace("item/krelms-buff-bracers", "item/krelms-buff-bracers-Unique_Bracer_Set_02_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-animus")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-animus", "artisan/blacksmith/recipe/demons-animus");
} else 
if (aLinks[i].href.endsWith("item/gloves-of-worship")) {
aLinks[i].href = aLinks[i].href.replace("item/gloves-of-worship", "item/gloves-of-worship-Unique_Gloves_103_x1");
} else 
if (aLinks[i].href.endsWith("item/grasps-of-essence-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/grasps-of-essence-P6_Necro", "item/grasps-of-essence-P6_Necro_Unique_Gloves_22");
} else 
if (aLinks[i].href.endsWith("item/stone-gauntlets")) {
aLinks[i].href = aLinks[i].href.replace("item/stone-gauntlets", "item/stone-gauntlets-Unique_Gloves_007_x1");
} else 
if (aLinks[i].href.endsWith("item/st-archews-gage")) {
aLinks[i].href = aLinks[i].href.replace("item/st-archews-gage", "item/st-archews-gage-Unique_Gloves_101_p2");
} else 
if (aLinks[i].href.endsWith("item/magefist")) {
aLinks[i].href = aLinks[i].href.replace("item/magefist", "item/magefist-P41_Unique_Gloves_014");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/pendergrasps")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/pendergrasps", "artisan/blacksmith/recipe/pendergrasps");
} else 
if (aLinks[i].href.endsWith("item/moribund-gauntlets-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/moribund-gauntlets-P6_Necro", "item/moribund-gauntlets-P6_Necro_Unique_Gloves_21");
} else 
if (aLinks[i].href.endsWith("item/gladiator-gauntlets")) {
aLinks[i].href = aLinks[i].href.replace("item/gladiator-gauntlets", "item/gladiator-gauntlets-Unique_Gloves_011_x1");
} else 
if (aLinks[i].href.endsWith("item/frostburn")) {
aLinks[i].href = aLinks[i].href.replace("item/frostburn", "item/frostburn-P41_Unique_Gloves_002");
} else 
if (aLinks[i].href.endsWith("item/tasker-and-theo")) {
aLinks[i].href = aLinks[i].href.replace("item/tasker-and-theo", "item/tasker-and-theo-Unique_Gloves_003_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/penders-purchase")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/penders-purchase", "artisan/blacksmith/recipe/penders-purchase");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cains-scribe")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cains-scribe", "artisan/blacksmith/recipe/cains-scribe");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ashearas-iron-fist")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ashearas-iron-fist", "artisan/blacksmith/recipe/ashearas-iron-fist");
} else 
if (aLinks[i].href.endsWith("item/zunimassas-finger-wraps")) {
aLinks[i].href = aLinks[i].href.replace("item/zunimassas-finger-wraps", "item/zunimassas-finger-wraps-P2_Unique_Gloves_03");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/sages-gesture")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/sages-gesture", "artisan/blacksmith/recipe/sages-gesture");
} else 
if (aLinks[i].href.endsWith("item/natalyas-touch")) {
aLinks[i].href = aLinks[i].href.replace("item/natalyas-touch", "item/natalyas-touch-P2_Unique_Gloves_01");
} else 
if (aLinks[i].href.endsWith("item/immortal-kings-irons")) {
aLinks[i].href = aLinks[i].href.replace("item/immortal-kings-irons", "item/immortal-kings-irons-Unique_Gloves_008_x1");
} else 
if (aLinks[i].href.endsWith("item/innas-hold")) {
aLinks[i].href = aLinks[i].href.replace("item/innas-hold", "item/innas-hold-P2_Unique_Gloves_04");
} else 
if (aLinks[i].href.endsWith("item/tal-rashas-grasp")) {
aLinks[i].href = aLinks[i].href.replace("item/tal-rashas-grasp", "item/tal-rashas-grasp-P2_Unique_Gloves_02");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cains-scriviner")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cains-scriviner", "artisan/blacksmith/recipe/cains-scriviner");
} else 
if (aLinks[i].href.endsWith("item/the-shadows-grasp")) {
aLinks[i].href = aLinks[i].href.replace("item/the-shadows-grasp", "item/the-shadows-grasp-Unique_Gloves_Set_14_x1");
} else 
if (aLinks[i].href.endsWith("item/sunwukos-paws")) {
aLinks[i].href = aLinks[i].href.replace("item/sunwukos-paws", "item/sunwukos-paws-Unique_Gloves_Set_11_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ashearas-ward")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ashearas-ward", "artisan/blacksmith/recipe/ashearas-ward");
} else 
if (aLinks[i].href.endsWith("item/pride-of-the-invoker")) {
aLinks[i].href = aLinks[i].href.replace("item/pride-of-the-invoker", "item/pride-of-the-invoker-Unique_Gloves_Set_12_x1");
} else 
if (aLinks[i].href.endsWith("item/jade-harvesters-mercy")) {
aLinks[i].href = aLinks[i].href.replace("item/jade-harvesters-mercy", "item/jade-harvesters-mercy-Unique_Gloves_Set_09_x1");
} else 
if (aLinks[i].href.endsWith("item/pull-of-the-earth")) {
aLinks[i].href = aLinks[i].href.replace("item/pull-of-the-earth", "item/pull-of-the-earth-Unique_Gloves_Set_15_x1");
} else 
if (aLinks[i].href.endsWith("item/vyrs-grasping-gauntlets")) {
aLinks[i].href = aLinks[i].href.replace("item/vyrs-grasping-gauntlets", "item/vyrs-grasping-gauntlets-Unique_Gloves_Set_13_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/sages-purchase")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/sages-purchase", "artisan/blacksmith/recipe/sages-purchase");
} else 
if (aLinks[i].href.endsWith("item/raekors-wraps")) {
aLinks[i].href = aLinks[i].href.replace("item/raekors-wraps", "item/raekors-wraps-Unique_Gloves_Set_05_x1");
} else 
if (aLinks[i].href.endsWith("item/gauntlet-of-the-wastes")) {
aLinks[i].href = aLinks[i].href.replace("item/gauntlet-of-the-wastes", "item/gauntlet-of-the-wastes-Unique_Gloves_Set_01_p2");
} else 
if (aLinks[i].href.endsWith("item/rolands-grasp")) {
aLinks[i].href = aLinks[i].href.replace("item/rolands-grasp", "item/rolands-grasp-Unique_Gloves_Set_01_p1");
} else 
if (aLinks[i].href.endsWith("item/gauntlets-of-akkhan")) {
aLinks[i].href = aLinks[i].href.replace("item/gauntlets-of-akkhan", "item/gauntlets-of-akkhan-Unique_Gloves_Set_10_x1");
} else 
if (aLinks[i].href.endsWith("item/will-of-the-light")) {
aLinks[i].href = aLinks[i].href.replace("item/will-of-the-light", "item/will-of-the-light-Unique_Gloves_Set_03_p3");
} else 
if (aLinks[i].href.endsWith("item/fiendish-grips")) {
aLinks[i].href = aLinks[i].href.replace("item/fiendish-grips", "item/fiendish-grips-Unique_Gloves_Set_03_p2");
} else 
if (aLinks[i].href.endsWith("item/marauders-gloves")) {
aLinks[i].href = aLinks[i].href.replace("item/marauders-gloves", "item/marauders-gloves-Unique_Gloves_Set_07_x1");
} else 
if (aLinks[i].href.endsWith("item/ulianas-fury")) {
aLinks[i].href = aLinks[i].href.replace("item/ulianas-fury", "item/ulianas-fury-Unique_Gloves_Set_01_p3");
} else 
if (aLinks[i].href.endsWith("item/fists-of-thunder")) {
aLinks[i].href = aLinks[i].href.replace("item/fists-of-thunder", "item/fists-of-thunder-Unique_Gloves_Set_08_x1");
} else 
if (aLinks[i].href.endsWith("item/fierce-gauntlets")) {
aLinks[i].href = aLinks[i].href.replace("item/fierce-gauntlets", "item/fierce-gauntlets-Unique_Gloves_Set_02_p2");
} else 
if (aLinks[i].href.endsWith("item/firebirds-talons")) {
aLinks[i].href = aLinks[i].href.replace("item/firebirds-talons", "item/firebirds-talons-Unique_Gloves_Set_06_x1");
} else 
if (aLinks[i].href.endsWith("item/arachyrs-claws")) {
aLinks[i].href = aLinks[i].href.replace("item/arachyrs-claws", "item/arachyrs-claws-Unique_Gloves_Set_02_p3");
} else 
if (aLinks[i].href.endsWith("item/helltooth-gauntlets")) {
aLinks[i].href = aLinks[i].href.replace("item/helltooth-gauntlets", "item/helltooth-gauntlets-Unique_Gloves_Set_16_x1");
} else 
if (aLinks[i].href.endsWith("item/tragouls-claws-P6_Necro_Set_2_Gloves")) {
aLinks[i].href = aLinks[i].href.replace("item/tragouls-claws-P6_Necro_Set_2_Gloves", "item/tragouls-claws-P6_Necro_Set_2_Gloves");
} else 
if (aLinks[i].href.endsWith("item/pestilence-gloves-P6_Necro_Set_4_Gloves")) {
aLinks[i].href = aLinks[i].href.replace("item/pestilence-gloves-P6_Necro_Set_4_Gloves", "item/pestilence-gloves-P6_Necro_Set_4_Gloves");
} else 
if (aLinks[i].href.endsWith("item/rathmas-macabre-vambraces-P6_Necro_Set_1_Gloves")) {
aLinks[i].href = aLinks[i].href.replace("item/rathmas-macabre-vambraces-P6_Necro_Set_1_Gloves", "item/rathmas-macabre-vambraces-P6_Necro_Set_1_Gloves");
} else 
if (aLinks[i].href.endsWith("item/inariuss-will-P6_Necro_Set_3_Gloves")) {
aLinks[i].href = aLinks[i].href.replace("item/inariuss-will-P6_Necro_Set_3_Gloves", "item/inariuss-will-P6_Necro_Set_3_Gloves");
} else 
if (aLinks[i].href.endsWith("item/saffron-wrap")) {
aLinks[i].href = aLinks[i].href.replace("item/saffron-wrap", "item/saffron-wrap-P43_Unique_Belt_001_x1");
} else 
if (aLinks[i].href.endsWith("item/vigilante-belt")) {
aLinks[i].href = aLinks[i].href.replace("item/vigilante-belt", "item/vigilante-belt-Unique_Belt_002_x1");
} else 
if (aLinks[i].href.endsWith("item/goldwrap")) {
aLinks[i].href = aLinks[i].href.replace("item/goldwrap", "item/goldwrap-Unique_Belt_010_x1");
} else 
if (aLinks[i].href.endsWith("item/hellcat-waistguard")) {
aLinks[i].href = aLinks[i].href.replace("item/hellcat-waistguard", "item/hellcat-waistguard-P43_Unique_Belt_005_x1");
} else 
if (aLinks[i].href.endsWith("item/insatiable-belt")) {
aLinks[i].href = aLinks[i].href.replace("item/insatiable-belt", "item/insatiable-belt-Unique_Belt_103_x1");
} else 
if (aLinks[i].href.endsWith("item/binding-of-the-lost")) {
aLinks[i].href = aLinks[i].href.replace("item/binding-of-the-lost", "item/binding-of-the-lost-P61_Unique_Belt_03");
} else 
if (aLinks[i].href.endsWith("item/the-shame-of-delsere")) {
aLinks[i].href = aLinks[i].href.replace("item/the-shame-of-delsere", "item/the-shame-of-delsere-P4_Unique_Belt_02");
} else 
if (aLinks[i].href.endsWith("item/dayntees-binding")) {
aLinks[i].href = aLinks[i].href.replace("item/dayntees-binding", "item/dayntees-binding-P61_Unique_Belt_01");
} else 
if (aLinks[i].href.endsWith("item/kyoshiros-soul")) {
aLinks[i].href = aLinks[i].href.replace("item/kyoshiros-soul", "item/kyoshiros-soul-P4_Unique_Belt_05");
} else 
if (aLinks[i].href.endsWith("item/sacred-harness")) {
aLinks[i].href = aLinks[i].href.replace("item/sacred-harness", "item/sacred-harness-P3_Unique_Belt_01");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/quick-draw-belt")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/quick-draw-belt", "artisan/blacksmith/recipe/quick-draw-belt");
} else 
if (aLinks[i].href.endsWith("item/string-of-ears")) {
aLinks[i].href = aLinks[i].href.replace("item/string-of-ears", "item/string-of-ears-P4_Unique_Belt_03");
} else 
if (aLinks[i].href.endsWith("item/bakuli-jungle-wraps")) {
aLinks[i].href = aLinks[i].href.replace("item/bakuli-jungle-wraps", "item/bakuli-jungle-wraps-P61_Unique_Belt_007");
} else 
if (aLinks[i].href.endsWith("item/saffron-wrap")) {
aLinks[i].href = aLinks[i].href.replace("item/saffron-wrap", "item/saffron-wrap-Unique_Belt_001_x1");
} else 
if (aLinks[i].href.endsWith("item/string-of-ears")) {
aLinks[i].href = aLinks[i].href.replace("item/string-of-ears", "item/string-of-ears-Unique_Belt_008_x1");
} else 
if (aLinks[i].href.endsWith("item/fazulas-improbable-chain")) {
aLinks[i].href = aLinks[i].href.replace("item/fazulas-improbable-chain", "item/fazulas-improbable-chain-P4_Unique_Belt_07");
} else 
if (aLinks[i].href.endsWith("item/hergbrashs-binding")) {
aLinks[i].href = aLinks[i].href.replace("item/hergbrashs-binding", "item/hergbrashs-binding-P4_Unique_Belt_06");
} else 
if (aLinks[i].href.endsWith("item/sebors-nightmare")) {
aLinks[i].href = aLinks[i].href.replace("item/sebors-nightmare", "item/sebors-nightmare-Unique_Belt_108_p2");
} else 
if (aLinks[i].href.endsWith("item/sash-of-knives")) {
aLinks[i].href = aLinks[i].href.replace("item/sash-of-knives", "item/sash-of-knives-Unique_Belt_102_p2");
} else 
if (aLinks[i].href.endsWith("item/omnislash")) {
aLinks[i].href = aLinks[i].href.replace("item/omnislash", "item/omnislash-P2_Unique_Belt_04");
} else 
if (aLinks[i].href.endsWith("item/haunting-girdle")) {
aLinks[i].href = aLinks[i].href.replace("item/haunting-girdle", "item/haunting-girdle-P2_Unique_Belt_03");
} else 
if (aLinks[i].href.endsWith("item/sebors-nightmare")) {
aLinks[i].href = aLinks[i].href.replace("item/sebors-nightmare", "item/sebors-nightmare-Unique_Belt_108_x1");
} else 
if (aLinks[i].href.endsWith("item/hwoj-wrap")) {
aLinks[i].href = aLinks[i].href.replace("item/hwoj-wrap", "item/hwoj-wrap-Unique_Belt_107_x1");
} else 
if (aLinks[i].href.endsWith("item/omryns-chain")) {
aLinks[i].href = aLinks[i].href.replace("item/omryns-chain", "item/omryns-chain-P2_Unique_Belt_06");
} else 
if (aLinks[i].href.endsWith("item/cord-of-the-sherma")) {
aLinks[i].href = aLinks[i].href.replace("item/cord-of-the-sherma", "item/cord-of-the-sherma-Unique_Belt_104_p2");
} else 
if (aLinks[i].href.endsWith("item/harrington-waistguard")) {
aLinks[i].href = aLinks[i].href.replace("item/harrington-waistguard", "item/harrington-waistguard-Unique_Belt_105_x1");
} else 
if (aLinks[i].href.endsWith("item/crashing-rain")) {
aLinks[i].href = aLinks[i].href.replace("item/crashing-rain", "item/crashing-rain-P2_Unique_Belt_01");
} else 
if (aLinks[i].href.endsWith("item/chain-of-shadows")) {
aLinks[i].href = aLinks[i].href.replace("item/chain-of-shadows", "item/chain-of-shadows-P4_Unique_Belt_01");
} else 
if (aLinks[i].href.endsWith("item/cord-of-the-sherma")) {
aLinks[i].href = aLinks[i].href.replace("item/cord-of-the-sherma", "item/cord-of-the-sherma-Unique_Belt_104_x1");
} else 
if (aLinks[i].href.endsWith("item/blessed-of-haull")) {
aLinks[i].href = aLinks[i].href.replace("item/blessed-of-haull", "item/blessed-of-haull-P2_Unique_Belt_05");
} else 
if (aLinks[i].href.endsWith("item/belt-of-transcendence")) {
aLinks[i].href = aLinks[i].href.replace("item/belt-of-transcendence", "item/belt-of-transcendence-P2_Unique_Belt_02");
} else 
if (aLinks[i].href.endsWith("item/razor-strop")) {
aLinks[i].href = aLinks[i].href.replace("item/razor-strop", "item/razor-strop-Unique_Belt_101_x1");
} else 
if (aLinks[i].href.endsWith("item/angel-hair-braid")) {
aLinks[i].href = aLinks[i].href.replace("item/angel-hair-braid", "item/angel-hair-braid-Unique_Belt_003_x1");
} else 
if (aLinks[i].href.endsWith("item/thundergods-vigor")) {
aLinks[i].href = aLinks[i].href.replace("item/thundergods-vigor", "item/thundergods-vigor-Unique_BarbBelt_003_x1");
} else 
if (aLinks[i].href.endsWith("item/angel-hair-braid")) {
aLinks[i].href = aLinks[i].href.replace("item/angel-hair-braid", "item/angel-hair-braid-Unique_Belt_003_p1");
} else 
if (aLinks[i].href.endsWith("item/belt-of-the-trove")) {
aLinks[i].href = aLinks[i].href.replace("item/belt-of-the-trove", "item/belt-of-the-trove-P2_Unique_Belt_008");
} else 
if (aLinks[i].href.endsWith("item/the-witching-hour")) {
aLinks[i].href = aLinks[i].href.replace("item/the-witching-hour", "item/the-witching-hour-Unique_Belt_009_x1");
} else 
if (aLinks[i].href.endsWith("item/hellcat-waistguard")) {
aLinks[i].href = aLinks[i].href.replace("item/hellcat-waistguard", "item/hellcat-waistguard-Unique_Belt_005_x1");
} else 
if (aLinks[i].href.endsWith("item/jangs-envelopment")) {
aLinks[i].href = aLinks[i].href.replace("item/jangs-envelopment", "item/jangs-envelopment-Unique_Belt_106_x1");
} else 
if (aLinks[i].href.endsWith("item/khassetts-cord-of-righteousness-P42_Crusader_FoH_Belt")) {
aLinks[i].href = aLinks[i].href.replace("item/khassetts-cord-of-righteousness-P42_Crusader_FoH_Belt", "item/khassetts-cord-of-righteousness-P42_Crusader_FoH_Belt");
} else 
if (aLinks[i].href.endsWith("item/zoeys-secret")) {
aLinks[i].href = aLinks[i].href.replace("item/zoeys-secret", "item/zoeys-secret-P4_Unique_Belt_04");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/fleeting-strap")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/fleeting-strap", "artisan/blacksmith/recipe/fleeting-strap");
} else 
if (aLinks[i].href.endsWith("item/hunters-wrath")) {
aLinks[i].href = aLinks[i].href.replace("item/hunters-wrath", "item/hunters-wrath-P3_Unique_Belt_005");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/captain-crimsons-satin-sash")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/captain-crimsons-satin-sash", "artisan/blacksmith/recipe/captain-crimsons-satin-sash");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/guardians-sheath")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/guardians-sheath", "artisan/blacksmith/recipe/guardians-sheath");
} else 
if (aLinks[i].href.endsWith("item/innas-favor")) {
aLinks[i].href = aLinks[i].href.replace("item/innas-favor", "item/innas-favor-Unique_Belt_007_x1");
} else 
if (aLinks[i].href.endsWith("item/tal-rashas-brace")) {
aLinks[i].href = aLinks[i].href.replace("item/tal-rashas-brace", "item/tal-rashas-brace-Unique_Belt_006_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-lock")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-lock", "artisan/blacksmith/recipe/demons-lock");
} else 
if (aLinks[i].href.endsWith("item/blackthornes-notched-belt")) {
aLinks[i].href = aLinks[i].href.replace("item/blackthornes-notched-belt", "item/blackthornes-notched-belt-Unique_Belt_015_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-restraint")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-restraint", "artisan/blacksmith/recipe/demons-restraint");
} else 
if (aLinks[i].href.endsWith("item/krelms-buff-belt")) {
aLinks[i].href = aLinks[i].href.replace("item/krelms-buff-belt", "item/krelms-buff-belt-Unique_Belt_Set_02_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/guardians-case")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/guardians-case", "artisan/blacksmith/recipe/guardians-case");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/captain-crimsons-silk-girdle")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/captain-crimsons-silk-girdle", "artisan/blacksmith/recipe/captain-crimsons-silk-girdle");
} else 
if (aLinks[i].href.endsWith("item/pox-faulds")) {
aLinks[i].href = aLinks[i].href.replace("item/pox-faulds", "item/pox-faulds-Unique_Pants_007_p2");
} else 
if (aLinks[i].href.endsWith("item/deaths-bargain")) {
aLinks[i].href = aLinks[i].href.replace("item/deaths-bargain", "item/deaths-bargain-Unique_Pants_102_x1");
} else 
if (aLinks[i].href.endsWith("item/golemskin-breeches-P61_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/golemskin-breeches-P61_Necro", "item/golemskin-breeches-P61_Necro_Unique_Pants_21");
} else 
if (aLinks[i].href.endsWith("item/hammer-jammers")) {
aLinks[i].href = aLinks[i].href.replace("item/hammer-jammers", "item/hammer-jammers-P4_Unique_Pants_002");
} else 
if (aLinks[i].href.endsWith("item/hexing-pants-of-mr-yan")) {
aLinks[i].href = aLinks[i].href.replace("item/hexing-pants-of-mr-yan", "item/hexing-pants-of-mr-yan-Unique_Pants_101_x1");
} else 
if (aLinks[i].href.endsWith("item/defiler-cuisses-P61_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/defiler-cuisses-P61_Necro", "item/defiler-cuisses-P61_Necro_Unique_Pants_22");
} else 
if (aLinks[i].href.endsWith("item/swamp-land-waders")) {
aLinks[i].href = aLinks[i].href.replace("item/swamp-land-waders", "item/swamp-land-waders-P41_Unique_Pants_001");
} else 
if (aLinks[i].href.endsWith("item/depth-diggers")) {
aLinks[i].href = aLinks[i].href.replace("item/depth-diggers", "item/depth-diggers-Unique_Pants_006_p1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/gehennas")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/gehennas", "artisan/blacksmith/recipe/gehennas");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/skelons-deceit")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/skelons-deceit", "artisan/blacksmith/recipe/skelons-deceit");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cains-robes")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cains-robes", "artisan/blacksmith/recipe/cains-robes");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/captain-crimsons-bowsprit")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/captain-crimsons-bowsprit", "artisan/blacksmith/recipe/captain-crimsons-bowsprit");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ashearas-gait")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ashearas-gait", "artisan/blacksmith/recipe/ashearas-gait");
} else 
if (aLinks[i].href.endsWith("item/tal-rashas-stride")) {
aLinks[i].href = aLinks[i].href.replace("item/tal-rashas-stride", "item/tal-rashas-stride-P2_Unique_Pants_03");
} else 
if (aLinks[i].href.endsWith("item/zunimassas-cloth")) {
aLinks[i].href = aLinks[i].href.replace("item/zunimassas-cloth", "item/zunimassas-cloth-P2_Unique_Pants_04");
} else 
if (aLinks[i].href.endsWith("item/immortal-kings-stature")) {
aLinks[i].href = aLinks[i].href.replace("item/immortal-kings-stature", "item/immortal-kings-stature-P2_Unique_Pants_02");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-scale")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-scale", "artisan/blacksmith/recipe/demons-scale");
} else 
if (aLinks[i].href.endsWith("item/innas-temperance")) {
aLinks[i].href = aLinks[i].href.replace("item/innas-temperance", "item/innas-temperance-Unique_Pants_008_x1");
} else 
if (aLinks[i].href.endsWith("item/natalyas-leggings")) {
aLinks[i].href = aLinks[i].href.replace("item/natalyas-leggings", "item/natalyas-leggings-P2_Unique_Pants_01");
} else 
if (aLinks[i].href.endsWith("item/blackthornes-jousting-mail")) {
aLinks[i].href = aLinks[i].href.replace("item/blackthornes-jousting-mail", "item/blackthornes-jousting-mail-Unique_Pants_013_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demons-plate")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demons-plate", "artisan/blacksmith/recipe/demons-plate");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cains-habit")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cains-habit", "artisan/blacksmith/recipe/cains-habit");
} else 
if (aLinks[i].href.endsWith("item/renewal-of-the-invoker")) {
aLinks[i].href = aLinks[i].href.replace("item/renewal-of-the-invoker", "item/renewal-of-the-invoker-Unique_Pants_Set_12_x1");
} else 
if (aLinks[i].href.endsWith("item/jade-harvesters-courage")) {
aLinks[i].href = aLinks[i].href.replace("item/jade-harvesters-courage", "item/jade-harvesters-courage-Unique_Pants_Set_09_x1");
} else 
if (aLinks[i].href.endsWith("item/vyrs-fantastic-finery")) {
aLinks[i].href = aLinks[i].href.replace("item/vyrs-fantastic-finery", "item/vyrs-fantastic-finery-Unique_Pants_Set_13_x1");
} else 
if (aLinks[i].href.endsWith("item/sunwukos-leggings")) {
aLinks[i].href = aLinks[i].href.replace("item/sunwukos-leggings", "item/sunwukos-leggings-Unique_Pants_Set_11_x1");
} else 
if (aLinks[i].href.endsWith("item/the-shadows-coil")) {
aLinks[i].href = aLinks[i].href.replace("item/the-shadows-coil", "item/the-shadows-coil-Unique_Pants_Set_14_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/captain-crimsons-thrust")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/captain-crimsons-thrust", "artisan/blacksmith/recipe/captain-crimsons-thrust");
} else 
if (aLinks[i].href.endsWith("item/weight-of-the-earth")) {
aLinks[i].href = aLinks[i].href.replace("item/weight-of-the-earth", "item/weight-of-the-earth-Unique_Pants_Set_15_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ashearas-pace")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ashearas-pace", "artisan/blacksmith/recipe/ashearas-pace");
} else 
if (aLinks[i].href.endsWith("item/raekors-breeches")) {
aLinks[i].href = aLinks[i].href.replace("item/raekors-breeches", "item/raekors-breeches-Unique_Pants_Set_05_x1");
} else 
if (aLinks[i].href.endsWith("item/tasset-of-the-wastes")) {
aLinks[i].href = aLinks[i].href.replace("item/tasset-of-the-wastes", "item/tasset-of-the-wastes-Unique_Pants_Set_01_p2");
} else 
if (aLinks[i].href.endsWith("item/cuisses-of-akkhan")) {
aLinks[i].href = aLinks[i].href.replace("item/cuisses-of-akkhan", "item/cuisses-of-akkhan-Unique_Pants_Set_10_x1");
} else 
if (aLinks[i].href.endsWith("item/towers-of-the-light")) {
aLinks[i].href = aLinks[i].href.replace("item/towers-of-the-light", "item/towers-of-the-light-Unique_Pants_Set_03_p3");
} else 
if (aLinks[i].href.endsWith("item/rolands-determination")) {
aLinks[i].href = aLinks[i].href.replace("item/rolands-determination", "item/rolands-determination-Unique_Pants_Set_01_p1");
} else 
if (aLinks[i].href.endsWith("item/unholy-plates")) {
aLinks[i].href = aLinks[i].href.replace("item/unholy-plates", "item/unholy-plates-Unique_Pants_Set_03_p2");
} else 
if (aLinks[i].href.endsWith("item/marauders-encasement")) {
aLinks[i].href = aLinks[i].href.replace("item/marauders-encasement", "item/marauders-encasement-Unique_Pants_Set_07_x1");
} else 
if (aLinks[i].href.endsWith("item/scales-of-the-dancing-serpent")) {
aLinks[i].href = aLinks[i].href.replace("item/scales-of-the-dancing-serpent", "item/scales-of-the-dancing-serpent-Unique_Pants_Set_08_x1");
} else 
if (aLinks[i].href.endsWith("item/ulianas-burden")) {
aLinks[i].href = aLinks[i].href.replace("item/ulianas-burden", "item/ulianas-burden-Unique_Pants_Set_01_p3");
} else 
if (aLinks[i].href.endsWith("item/firebirds-down")) {
aLinks[i].href = aLinks[i].href.replace("item/firebirds-down", "item/firebirds-down-Unique_Pants_Set_06_x1");
} else 
if (aLinks[i].href.endsWith("item/leg-guards-of-mystery")) {
aLinks[i].href = aLinks[i].href.replace("item/leg-guards-of-mystery", "item/leg-guards-of-mystery-Unique_Pants_Set_02_p2");
} else 
if (aLinks[i].href.endsWith("item/helltooth-leg-guards")) {
aLinks[i].href = aLinks[i].href.replace("item/helltooth-leg-guards", "item/helltooth-leg-guards-Unique_Pants_Set_16_x1");
} else 
if (aLinks[i].href.endsWith("item/arachyrs-legs")) {
aLinks[i].href = aLinks[i].href.replace("item/arachyrs-legs", "item/arachyrs-legs-Unique_Pants_Set_02_p3");
} else 
if (aLinks[i].href.endsWith("item/rathmas-skeletal-legplates-P6_Necro_Set_1_Pants")) {
aLinks[i].href = aLinks[i].href.replace("item/rathmas-skeletal-legplates-P6_Necro_Set_1_Pants", "item/rathmas-skeletal-legplates-P6_Necro_Set_1_Pants");
} else 
if (aLinks[i].href.endsWith("item/tragouls-hide-P6_Necro_Set_2_Pants")) {
aLinks[i].href = aLinks[i].href.replace("item/tragouls-hide-P6_Necro_Set_2_Pants", "item/tragouls-hide-P6_Necro_Set_2_Pants");
} else 
if (aLinks[i].href.endsWith("item/inariuss-reticence-P6_Necro_Set_3_Pants")) {
aLinks[i].href = aLinks[i].href.replace("item/inariuss-reticence-P6_Necro_Set_3_Pants", "item/inariuss-reticence-P6_Necro_Set_3_Pants");
} else 
if (aLinks[i].href.endsWith("item/pestilence-incantations-P6_Necro_Set_4_Pants")) {
aLinks[i].href = aLinks[i].href.replace("item/pestilence-incantations-P6_Necro_Set_4_Pants", "item/pestilence-incantations-P6_Necro_Set_4_Pants");
} else 
if (aLinks[i].href.endsWith("item/lut-socks")) {
aLinks[i].href = aLinks[i].href.replace("item/lut-socks", "item/lut-socks-Unique_Boots_009_x1");
} else 
if (aLinks[i].href.endsWith("item/the-crudest-boots")) {
aLinks[i].href = aLinks[i].href.replace("item/the-crudest-boots", "item/the-crudest-boots-Unique_Boots_010_x1");
} else 
if (aLinks[i].href.endsWith("item/rivera-dancers")) {
aLinks[i].href = aLinks[i].href.replace("item/rivera-dancers", "item/rivera-dancers-P4_Unique_Boots_001");
} else 
if (aLinks[i].href.endsWith("item/the-crudest-boots")) {
aLinks[i].href = aLinks[i].href.replace("item/the-crudest-boots", "item/the-crudest-boots-P1_Unique_Boots_010");
} else 
if (aLinks[i].href.endsWith("item/illusory-boots")) {
aLinks[i].href = aLinks[i].href.replace("item/illusory-boots", "item/illusory-boots-Unique_Boots_103_x1");
} else 
if (aLinks[i].href.endsWith("item/boots-of-disregard")) {
aLinks[i].href = aLinks[i].href.replace("item/boots-of-disregard", "item/boots-of-disregard-Unique_Boots_102_x1");
} else 
if (aLinks[i].href.endsWith("item/boj-anglers")) {
aLinks[i].href = aLinks[i].href.replace("item/boj-anglers", "item/boj-anglers-Unique_Boots_001_x1");
} else 
if (aLinks[i].href.endsWith("item/irontoe-mudsputters")) {
aLinks[i].href = aLinks[i].href.replace("item/irontoe-mudsputters", "item/irontoe-mudsputters-Unique_Boots_104_x1");
} else 
if (aLinks[i].href.endsWith("item/bryners-journey-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/bryners-journey-P6_Necro", "item/bryners-journey-P6_Necro_Unique_Boots_22");
} else 
if (aLinks[i].href.endsWith("item/fire-walkers")) {
aLinks[i].href = aLinks[i].href.replace("item/fire-walkers", "item/fire-walkers-Unique_Boots_007_p2");
} else 
if (aLinks[i].href.endsWith("item/fire-walkers")) {
aLinks[i].href = aLinks[i].href.replace("item/fire-walkers", "item/fire-walkers-Unique_Boots_007_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/lost-boys")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/lost-boys", "artisan/blacksmith/recipe/lost-boys");
} else 
if (aLinks[i].href.endsWith("item/steuarts-greaves-P6_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/steuarts-greaves-P6_Necro", "item/steuarts-greaves-P6_Necro_Unique_Boots_21");
} else 
if (aLinks[i].href.endsWith("item/steuarts-greaves-P61_Necro")) {
aLinks[i].href = aLinks[i].href.replace("item/steuarts-greaves-P61_Necro", "item/steuarts-greaves-P61_Necro_Unique_Boots_21");
} else 
if (aLinks[i].href.endsWith("item/nilfurs-boast")) {
aLinks[i].href = aLinks[i].href.replace("item/nilfurs-boast", "item/nilfurs-boast-P61_Unique_Boots_01");
} else 
if (aLinks[i].href.endsWith("item/ice-climbers")) {
aLinks[i].href = aLinks[i].href.replace("item/ice-climbers", "item/ice-climbers-Unique_Boots_008_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/board-walkers")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/board-walkers", "artisan/blacksmith/recipe/board-walkers");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cains-sandals")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cains-sandals", "artisan/blacksmith/recipe/cains-sandals");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/captain-crimsons-whalers")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/captain-crimsons-whalers", "artisan/blacksmith/recipe/captain-crimsons-whalers");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ashearas-tracks")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ashearas-tracks", "artisan/blacksmith/recipe/ashearas-tracks");
} else 
if (aLinks[i].href.endsWith("item/zunimassas-trail")) {
aLinks[i].href = aLinks[i].href.replace("item/zunimassas-trail", "item/zunimassas-trail-Unique_Boots_013_x1");
} else 
if (aLinks[i].href.endsWith("item/innas-sandals")) {
aLinks[i].href = aLinks[i].href.replace("item/innas-sandals", "item/innas-sandals-P2_Unique_Boots_02");
} else 
if (aLinks[i].href.endsWith("item/natalyas-bloody-footprints")) {
aLinks[i].href = aLinks[i].href.replace("item/natalyas-bloody-footprints", "item/natalyas-bloody-footprints-Unique_Boots_011_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/sages-journey")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/sages-journey", "artisan/blacksmith/recipe/sages-journey");
} else 
if (aLinks[i].href.endsWith("item/blackthornes-spurs")) {
aLinks[i].href = aLinks[i].href.replace("item/blackthornes-spurs", "item/blackthornes-spurs-Unique_Boots_019_x1");
} else 
if (aLinks[i].href.endsWith("item/immortal-kings-stride")) {
aLinks[i].href = aLinks[i].href.replace("item/immortal-kings-stride", "item/immortal-kings-stride-Unique_Boots_012_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/sages-passage")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/sages-passage", "artisan/blacksmith/recipe/sages-passage");
} else 
if (aLinks[i].href.endsWith("item/jade-harvesters-swiftness")) {
aLinks[i].href = aLinks[i].href.replace("item/jade-harvesters-swiftness", "item/jade-harvesters-swiftness-Unique_Boots_Set_09_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cains-travelers")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cains-travelers", "artisan/blacksmith/recipe/cains-travelers");
} else 
if (aLinks[i].href.endsWith("item/zeal-of-the-invoker")) {
aLinks[i].href = aLinks[i].href.replace("item/zeal-of-the-invoker", "item/zeal-of-the-invoker-Unique_Boots_Set_12_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ashearas-finders")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ashearas-finders", "artisan/blacksmith/recipe/ashearas-finders");
} else 
if (aLinks[i].href.endsWith("item/the-shadows-heels")) {
aLinks[i].href = aLinks[i].href.replace("item/the-shadows-heels", "item/the-shadows-heels-Unique_Boots_Set_14_x1");
} else 
if (aLinks[i].href.endsWith("item/vyrs-swaggering-stance")) {
aLinks[i].href = aLinks[i].href.replace("item/vyrs-swaggering-stance", "item/vyrs-swaggering-stance-Unique_Boots_Set_13_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/captain-crimsons-waders")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/captain-crimsons-waders", "artisan/blacksmith/recipe/captain-crimsons-waders");
} else 
if (aLinks[i].href.endsWith("item/foundation-of-the-earth")) {
aLinks[i].href = aLinks[i].href.replace("item/foundation-of-the-earth", "item/foundation-of-the-earth-Unique_Boots_Set_15_x1");
} else 
if (aLinks[i].href.endsWith("item/raekors-striders")) {
aLinks[i].href = aLinks[i].href.replace("item/raekors-striders", "item/raekors-striders-Unique_Boots_Set_05_x1");
} else 
if (aLinks[i].href.endsWith("item/sabaton-of-the-wastes")) {
aLinks[i].href = aLinks[i].href.replace("item/sabaton-of-the-wastes", "item/sabaton-of-the-wastes-Unique_Boots_Set_01_p2");
} else 
if (aLinks[i].href.endsWith("item/rolands-stride")) {
aLinks[i].href = aLinks[i].href.replace("item/rolands-stride", "item/rolands-stride-Unique_Boots_Set_01_p1");
} else 
if (aLinks[i].href.endsWith("item/foundation-of-the-light")) {
aLinks[i].href = aLinks[i].href.replace("item/foundation-of-the-light", "item/foundation-of-the-light-Unique_Boots_Set_03_p3");
} else 
if (aLinks[i].href.endsWith("item/sabatons-of-akkhan")) {
aLinks[i].href = aLinks[i].href.replace("item/sabatons-of-akkhan", "item/sabatons-of-akkhan-Unique_Boots_Set_10_x1");
} else 
if (aLinks[i].href.endsWith("item/hell-walkers")) {
aLinks[i].href = aLinks[i].href.replace("item/hell-walkers", "item/hell-walkers-Unique_Boots_Set_03_p2");
} else 
if (aLinks[i].href.endsWith("item/marauders-treads")) {
aLinks[i].href = aLinks[i].href.replace("item/marauders-treads", "item/marauders-treads-Unique_Boots_Set_07_x1");
} else 
if (aLinks[i].href.endsWith("item/eightdemon-boots")) {
aLinks[i].href = aLinks[i].href.replace("item/eightdemon-boots", "item/eightdemon-boots-Unique_Boots_Set_08_x1");
} else 
if (aLinks[i].href.endsWith("item/ulianas-destiny")) {
aLinks[i].href = aLinks[i].href.replace("item/ulianas-destiny", "item/ulianas-destiny-Unique_Boots_Set_01_p3");
} else 
if (aLinks[i].href.endsWith("item/striders-of-destiny")) {
aLinks[i].href = aLinks[i].href.replace("item/striders-of-destiny", "item/striders-of-destiny-Unique_Boots_Set_02_p2");
} else 
if (aLinks[i].href.endsWith("item/firebirds-tarsi")) {
aLinks[i].href = aLinks[i].href.replace("item/firebirds-tarsi", "item/firebirds-tarsi-Unique_Boots_Set_06_x1");
} else 
if (aLinks[i].href.endsWith("item/helltooth-greaves")) {
aLinks[i].href = aLinks[i].href.replace("item/helltooth-greaves", "item/helltooth-greaves-Unique_Boots_Set_16_x1");
} else 
if (aLinks[i].href.endsWith("item/arachyrs-stride")) {
aLinks[i].href = aLinks[i].href.replace("item/arachyrs-stride", "item/arachyrs-stride-Unique_Boots_Set_02_p3");
} else 
if (aLinks[i].href.endsWith("item/pestilence-battle-boots-P6_Necro_Set_4_Boots")) {
aLinks[i].href = aLinks[i].href.replace("item/pestilence-battle-boots-P6_Necro_Set_4_Boots", "item/pestilence-battle-boots-P6_Necro_Set_4_Boots");
} else 
if (aLinks[i].href.endsWith("item/inariuss-perseverance-P6_Necro_Set_3_Boots")) {
aLinks[i].href = aLinks[i].href.replace("item/inariuss-perseverance-P6_Necro_Set_3_Boots", "item/inariuss-perseverance-P6_Necro_Set_3_Boots");
} else 
if (aLinks[i].href.endsWith("item/tragouls-stalwart-greaves-P6_Necro_Set_2_Boots")) {
aLinks[i].href = aLinks[i].href.replace("item/tragouls-stalwart-greaves-P6_Necro_Set_2_Boots", "item/tragouls-stalwart-greaves-P6_Necro_Set_2_Boots");
} else 
if (aLinks[i].href.endsWith("item/rathmas-ossified-sabatons-P6_Necro_Set_1_Boots")) {
aLinks[i].href = aLinks[i].href.replace("item/rathmas-ossified-sabatons-P6_Necro_Set_1_Boots", "item/rathmas-ossified-sabatons-P6_Necro_Set_1_Boots");
} else 
if (aLinks[i].href.endsWith("item/cloak-of-deception")) {
aLinks[i].href = aLinks[i].href.replace("item/cloak-of-deception", "item/cloak-of-deception-Unique_Cloak_102_x1");
} else 
if (aLinks[i].href.endsWith("item/beckon-sail")) {
aLinks[i].href = aLinks[i].href.replace("item/beckon-sail", "item/beckon-sail-Unique_Cloak_005_x1");
} else 
if (aLinks[i].href.endsWith("item/blackfeather")) {
aLinks[i].href = aLinks[i].href.replace("item/blackfeather", "item/blackfeather-Unique_Cloak_101_x1");
} else 
if (aLinks[i].href.endsWith("item/the-cloak-of-the-garwulf")) {
aLinks[i].href = aLinks[i].href.replace("item/the-cloak-of-the-garwulf", "item/the-cloak-of-the-garwulf-Unique_Cloak_002_p1");
} else 
if (aLinks[i].href.endsWith("item/cape-of-the-dark-night")) {
aLinks[i].href = aLinks[i].href.replace("item/cape-of-the-dark-night", "item/cape-of-the-dark-night-Unique_Cloak_001_x1");
} else 
if (aLinks[i].href.endsWith("item/natalyas-embrace")) {
aLinks[i].href = aLinks[i].href.replace("item/natalyas-embrace", "item/natalyas-embrace-Unique_Cloak_006_x1");
} else 
if (aLinks[i].href.endsWith("item/cage-of-the-hellborn")) {
aLinks[i].href = aLinks[i].href.replace("item/cage-of-the-hellborn", "item/cage-of-the-hellborn-Unique_Chest_Set_03_p2");
} else 
if (aLinks[i].href.endsWith("item/see-no-evil")) {
aLinks[i].href = aLinks[i].href.replace("item/see-no-evil", "item/see-no-evil-Unique_SpiritStone_005_x1");
} else 
if (aLinks[i].href.endsWith("item/gyana-na-kashu")) {
aLinks[i].href = aLinks[i].href.replace("item/gyana-na-kashu", "item/gyana-na-kashu-Unique_SpiritStone_004_x1");
} else 
if (aLinks[i].href.endsWith("item/the-minds-eye")) {
aLinks[i].href = aLinks[i].href.replace("item/the-minds-eye", "item/the-minds-eye-Unique_SpiritStone_002_x1");
} else 
if (aLinks[i].href.endsWith("item/erlang-shen")) {
aLinks[i].href = aLinks[i].href.replace("item/erlang-shen", "item/erlang-shen-Unique_SpiritStone_003_x1");
} else 
if (aLinks[i].href.endsWith("item/eye-of-peshkov")) {
aLinks[i].href = aLinks[i].href.replace("item/eye-of-peshkov", "item/eye-of-peshkov-Unique_SpiritStone_103_x1");
} else 
if (aLinks[i].href.endsWith("item/kekegis-unbreakable-spirit")) {
aLinks[i].href = aLinks[i].href.replace("item/kekegis-unbreakable-spirit", "item/kekegis-unbreakable-spirit-Unique_SpiritStone_102_x1");
} else 
if (aLinks[i].href.endsWith("item/the-laws-of-seph")) {
aLinks[i].href = aLinks[i].href.replace("item/the-laws-of-seph", "item/the-laws-of-seph-Unique_SpiritStone_101_x1");
} else 
if (aLinks[i].href.endsWith("item/bezoar-stone")) {
aLinks[i].href = aLinks[i].href.replace("item/bezoar-stone", "item/bezoar-stone-Unique_SpiritStone_001_x1");
} else 
if (aLinks[i].href.endsWith("item/the-eye-of-the-storm")) {
aLinks[i].href = aLinks[i].href.replace("item/the-eye-of-the-storm", "item/the-eye-of-the-storm-Unique_SpiritStone_006_x1");
} else 
if (aLinks[i].href.endsWith("item/madstone")) {
aLinks[i].href = aLinks[i].href.replace("item/madstone", "item/madstone-P1_Unique_SpiritStone_008");
} else 
if (aLinks[i].href.endsWith("item/tzo-krins-gaze")) {
aLinks[i].href = aLinks[i].href.replace("item/tzo-krins-gaze", "item/tzo-krins-gaze-Unique_SpiritStone_007_x1");
} else 
if (aLinks[i].href.endsWith("item/innas-radiance")) {
aLinks[i].href = aLinks[i].href.replace("item/innas-radiance", "item/innas-radiance-Unique_SpiritStone_009_x1");
} else 
if (aLinks[i].href.endsWith("item/split-tusk")) {
aLinks[i].href = aLinks[i].href.replace("item/split-tusk", "item/split-tusk-Unique_VoodooMask_006_x1");
} else 
if (aLinks[i].href.endsWith("item/quetzalcoatl")) {
aLinks[i].href = aLinks[i].href.replace("item/quetzalcoatl", "item/quetzalcoatl-Unique_VoodooMask_005_x1");
} else 
if (aLinks[i].href.endsWith("item/carnevil")) {
aLinks[i].href = aLinks[i].href.replace("item/carnevil", "item/carnevil-Unique_VoodooMask_101_x1");
} else 
if (aLinks[i].href.endsWith("item/mask-of-jeram")) {
aLinks[i].href = aLinks[i].href.replace("item/mask-of-jeram", "item/mask-of-jeram-P61_Unique_VoodooMask_102_x1");
} else 
if (aLinks[i].href.endsWith("item/the-grin-reaper")) {
aLinks[i].href = aLinks[i].href.replace("item/the-grin-reaper", "item/the-grin-reaper-Unique_VoodooMask_002_x1");
} else 
if (aLinks[i].href.endsWith("item/visage-of-giyua")) {
aLinks[i].href = aLinks[i].href.replace("item/visage-of-giyua", "item/visage-of-giyua-Unique_VoodooMask_008_x1");
} else 
if (aLinks[i].href.endsWith("item/tiklandian-visage")) {
aLinks[i].href = aLinks[i].href.replace("item/tiklandian-visage", "item/tiklandian-visage-Unique_VoodooMask_001_x1");
} else 
if (aLinks[i].href.endsWith("item/zunimassas-vision")) {
aLinks[i].href = aLinks[i].href.replace("item/zunimassas-vision", "item/zunimassas-vision-Unique_VoodooMask_007_x1");
} else 
if (aLinks[i].href.endsWith("item/crown-of-the-primus")) {
aLinks[i].href = aLinks[i].href.replace("item/crown-of-the-primus", "item/crown-of-the-primus-Unique_WizardHat_104_x1");
} else 
if (aLinks[i].href.endsWith("item/the-swami")) {
aLinks[i].href = aLinks[i].href.replace("item/the-swami", "item/the-swami-P3_Unique_WizardHat_003");
} else 
if (aLinks[i].href.endsWith("item/dark-mages-shade")) {
aLinks[i].href = aLinks[i].href.replace("item/dark-mages-shade", "item/dark-mages-shade-Unique_WizardHat_001_x1");
} else 
if (aLinks[i].href.endsWith("item/archmages-vicalyke")) {
aLinks[i].href = aLinks[i].href.replace("item/archmages-vicalyke", "item/archmages-vicalyke-Unique_WizardHat_101_x1");
} else 
if (aLinks[i].href.endsWith("item/velvet-camaral")) {
aLinks[i].href = aLinks[i].href.replace("item/velvet-camaral", "item/velvet-camaral-Unique_WizardHat_102_x1");
} else 
if (aLinks[i].href.endsWith("item/the-magistrate")) {
aLinks[i].href = aLinks[i].href.replace("item/the-magistrate", "item/the-magistrate-Unique_WizardHat_103_x1");
} else 
if (aLinks[i].href.endsWith("item/storm-crow")) {
aLinks[i].href = aLinks[i].href.replace("item/storm-crow", "item/storm-crow-Unique_WizardHat_004_x1");
} else 
if (aLinks[i].href.endsWith("item/the-undisputed-champion")) {
aLinks[i].href = aLinks[i].href.replace("item/the-undisputed-champion", "item/the-undisputed-champion-P2_Unique_BarbBelt_006");
} else 
if (aLinks[i].href.endsWith("item/girdle-of-giants")) {
aLinks[i].href = aLinks[i].href.replace("item/girdle-of-giants", "item/girdle-of-giants-P61_Unique_BarbBelt_EQ");
} else 
if (aLinks[i].href.endsWith("item/pride-of-cassius")) {
aLinks[i].href = aLinks[i].href.replace("item/pride-of-cassius", "item/pride-of-cassius-Unique_BarbBelt_002_x1");
} else 
if (aLinks[i].href.endsWith("item/chilaniks-chain")) {
aLinks[i].href = aLinks[i].href.replace("item/chilaniks-chain", "item/chilaniks-chain-Unique_BarbBelt_101_x1");
} else 
if (aLinks[i].href.endsWith("item/lamentation")) {
aLinks[i].href = aLinks[i].href.replace("item/lamentation", "item/lamentation-Unique_BarbBelt_005_p1");
} else 
if (aLinks[i].href.endsWith("item/dread-iron")) {
aLinks[i].href = aLinks[i].href.replace("item/dread-iron", "item/dread-iron-P2_Unique_BarbBelt_001");
} else 
if (aLinks[i].href.endsWith("item/immortal-kings-tribal-binding")) {
aLinks[i].href = aLinks[i].href.replace("item/immortal-kings-tribal-binding", "item/immortal-kings-tribal-binding-Unique_BarbBelt_009_x1");
} else 
if (aLinks[i].href.endsWith("item/envious-blade")) {
aLinks[i].href = aLinks[i].href.replace("item/envious-blade", "item/envious-blade-Unique_Dagger_103_x1");
} else 
if (aLinks[i].href.endsWith("item/pig-sticker")) {
aLinks[i].href = aLinks[i].href.replace("item/pig-sticker", "item/pig-sticker-Unique_Dagger_007_x1");
} else 
if (aLinks[i].href.endsWith("item/wizardspike")) {
aLinks[i].href = aLinks[i].href.replace("item/wizardspike", "item/wizardspike-Unique_Dagger_010_x1_210");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/bloodmagic-blade")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/bloodmagic-blade", "artisan/blacksmith/recipe/bloodmagic-blade");
} else 
if (aLinks[i].href.endsWith("item/karleis-point")) {
aLinks[i].href = aLinks[i].href.replace("item/karleis-point", "item/karleis-point-P61_Unique_Dagger_101_x1");
} else 
if (aLinks[i].href.endsWith("item/eunjangdo")) {
aLinks[i].href = aLinks[i].href.replace("item/eunjangdo", "item/eunjangdo-Unique_Dagger_104_x1");
} else 
if (aLinks[i].href.endsWith("item/lord-greenstones-fan")) {
aLinks[i].href = aLinks[i].href.replace("item/lord-greenstones-fan", "item/lord-greenstones-fan-P61_Unique_Dagger_102_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/bloodmagic-edge")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/bloodmagic-edge", "artisan/blacksmith/recipe/bloodmagic-edge");
} else 
if (aLinks[i].href.endsWith("item/monster-hunter")) {
aLinks[i].href = aLinks[i].href.replace("item/monster-hunter", "item/monster-hunter-Unique_Sword_1H_017_x1");
} else 
if (aLinks[i].href.endsWith("item/wildwood")) {
aLinks[i].href = aLinks[i].href.replace("item/wildwood", "item/wildwood-Unique_Sword_1H_002_x1");
} else 
if (aLinks[i].href.endsWith("item/the-ancient-bonesaber-of-zumakalis")) {
aLinks[i].href = aLinks[i].href.replace("item/the-ancient-bonesaber-of-zumakalis", "item/the-ancient-bonesaber-of-zumakalis-Unique_Sword_1H_003_x1");
} else 
if (aLinks[i].href.endsWith("item/doombringer")) {
aLinks[i].href = aLinks[i].href.replace("item/doombringer", "item/doombringer-Unique_Sword_1H_014_x1");
} else 
if (aLinks[i].href.endsWith("item/rimeheart")) {
aLinks[i].href = aLinks[i].href.replace("item/rimeheart", "item/rimeheart-Unique_Sword_1H_109_x1");
} else 
if (aLinks[i].href.endsWith("item/fulminator")) {
aLinks[i].href = aLinks[i].href.replace("item/fulminator", "item/fulminator-P3_Unique_Sword_1H_104");
} else 
if (aLinks[i].href.endsWith("item/exarian")) {
aLinks[i].href = aLinks[i].href.replace("item/exarian", "item/exarian-Unique_Sword_1H_102_x1");
} else 
if (aLinks[i].href.endsWith("item/thunderfury-blessed-blade-of-the-windseeker")) {
aLinks[i].href = aLinks[i].href.replace("item/thunderfury-blessed-blade-of-the-windseeker", "item/thunderfury-blessed-blade-of-the-windseeker-Unique_Sword_1H_101_x1");
} else 
if (aLinks[i].href.endsWith("item/gift-of-silaria")) {
aLinks[i].href = aLinks[i].href.replace("item/gift-of-silaria", "item/gift-of-silaria-Unique_Sword_1H_103_x1");
} else 
if (aLinks[i].href.endsWith("item/sever")) {
aLinks[i].href = aLinks[i].href.replace("item/sever", "item/sever-Unique_Sword_1H_007_x1");
} else 
if (aLinks[i].href.endsWith("item/skycutter")) {
aLinks[i].href = aLinks[i].href.replace("item/skycutter", "item/skycutter-Unique_Sword_1H_004_x1");
} else 
if (aLinks[i].href.endsWith("item/devil-tongue")) {
aLinks[i].href = aLinks[i].href.replace("item/devil-tongue", "item/devil-tongue-Unique_Sword_1H_011_x1");
} else 
if (aLinks[i].href.endsWith("item/azurewrath")) {
aLinks[i].href = aLinks[i].href.replace("item/azurewrath", "item/azurewrath-P3_Unique_Sword_1H_012");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/griswolds-masterpiece")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/griswolds-masterpiece", "artisan/blacksmith/recipe/griswolds-masterpiece");
} else 
if (aLinks[i].href.endsWith("item/sword-of-ill-will")) {
aLinks[i].href = aLinks[i].href.replace("item/sword-of-ill-will", "item/sword-of-ill-will-P4_Unique_Sword_1H_01");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/griswolds-perfection")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/griswolds-perfection", "artisan/blacksmith/recipe/griswolds-perfection");
} else 
if (aLinks[i].href.endsWith("item/deathwish")) {
aLinks[i].href = aLinks[i].href.replace("item/deathwish", "item/deathwish-P61_Unique_Sword_1H_112_x1");
} else 
if (aLinks[i].href.endsWith("item/ingeom")) {
aLinks[i].href = aLinks[i].href.replace("item/ingeom", "item/ingeom-Unique_Sword_1H_113_x1");
} else 
if (aLinks[i].href.endsWith("item/shard-of-hate")) {
aLinks[i].href = aLinks[i].href.replace("item/shard-of-hate", "item/shard-of-hate-Unique_Sword_1H_Promo_02_x1");
} else 
if (aLinks[i].href.endsWith("item/the-twisted-sword")) {
aLinks[i].href = aLinks[i].href.replace("item/the-twisted-sword", "item/the-twisted-sword-Unique_Sword_1H_107_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/borns-searing-spite")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/borns-searing-spite", "artisan/blacksmith/recipe/borns-searing-spite");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/borns-furious-wrath")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/borns-furious-wrath", "artisan/blacksmith/recipe/borns-furious-wrath");
} else 
if (aLinks[i].href.endsWith("item/little-rogue")) {
aLinks[i].href = aLinks[i].href.replace("item/little-rogue", "item/little-rogue-Unique_Sword_1H_Set_03_x1");
} else 
if (aLinks[i].href.endsWith("item/the-slanderer")) {
aLinks[i].href = aLinks[i].href.replace("item/the-slanderer", "item/the-slanderer-Unique_Sword_1H_Set_02_x1");
} else 
if (aLinks[i].href.endsWith("item/spear-of-jairo-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/spear-of-jairo-P6", "item/spear-of-jairo-P6_Unique_Spear_01");
} else 
if (aLinks[i].href.endsWith("item/scrimshaw")) {
aLinks[i].href = aLinks[i].href.replace("item/scrimshaw", "item/scrimshaw-Unique_Spear_004_p3");
} else 
if (aLinks[i].href.endsWith("item/arreats-law")) {
aLinks[i].href = aLinks[i].href.replace("item/arreats-law", "item/arreats-law-P3_Unique_Spear_001");
} else 
if (aLinks[i].href.endsWith("item/the-three-hundredth-spear")) {
aLinks[i].href = aLinks[i].href.replace("item/the-three-hundredth-spear", "item/the-three-hundredth-spear-P4_Unique_Spear_002");
} else 
if (aLinks[i].href.endsWith("item/empyrean-messenger")) {
aLinks[i].href = aLinks[i].href.replace("item/empyrean-messenger", "item/empyrean-messenger-Unique_Spear_003_x1");
} else 
if (aLinks[i].href.endsWith("item/akanesh-the-herald-of-righteousness")) {
aLinks[i].href = aLinks[i].href.replace("item/akanesh-the-herald-of-righteousness", "item/akanesh-the-herald-of-righteousness-Unique_Spear_101_x1");
} else 
if (aLinks[i].href.endsWith("item/odyn-son")) {
aLinks[i].href = aLinks[i].href.replace("item/odyn-son", "item/odyn-son-Unique_Mace_1H_002_x1");
} else 
if (aLinks[i].href.endsWith("item/mad-monarchs-scepter")) {
aLinks[i].href = aLinks[i].href.replace("item/mad-monarchs-scepter", "item/mad-monarchs-scepter-Unique_Mace_1H_101_x1");
} else 
if (aLinks[i].href.endsWith("item/telrandens-hand")) {
aLinks[i].href = aLinks[i].href.replace("item/telrandens-hand", "item/telrandens-hand-Unique_Mace_1H_007_x1");
} else 
if (aLinks[i].href.endsWith("item/nutcracker")) {
aLinks[i].href = aLinks[i].href.replace("item/nutcracker", "item/nutcracker-Unique_Mace_1H_005_x1");
} else 
if (aLinks[i].href.endsWith("item/solanium")) {
aLinks[i].href = aLinks[i].href.replace("item/solanium", "item/solanium-Unique_Mace_1H_102_x1");
} else 
if (aLinks[i].href.endsWith("item/jaces-hammer-of-vigilance")) {
aLinks[i].href = aLinks[i].href.replace("item/jaces-hammer-of-vigilance", "item/jaces-hammer-of-vigilance-Unique_Mace_1H_103_x1");
} else 
if (aLinks[i].href.endsWith("item/neanderthal")) {
aLinks[i].href = aLinks[i].href.replace("item/neanderthal", "item/neanderthal-Unique_Mace_1H_003_x1");
} else 
if (aLinks[i].href.endsWith("item/nailbiter")) {
aLinks[i].href = aLinks[i].href.replace("item/nailbiter", "item/nailbiter-Unique_Mace_1H_008_x1");
} else 
if (aLinks[i].href.endsWith("item/sun-keeper")) {
aLinks[i].href = aLinks[i].href.replace("item/sun-keeper", "item/sun-keeper-Unique_Mace_1H_011_x1");
} else 
if (aLinks[i].href.endsWith("item/echoing-fury")) {
aLinks[i].href = aLinks[i].href.replace("item/echoing-fury", "item/echoing-fury-Unique_Mace_1H_001_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/earthshatter")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/earthshatter", "artisan/blacksmith/recipe/earthshatter");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/devastator")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/devastator", "artisan/blacksmith/recipe/devastator");
} else 
if (aLinks[i].href.endsWith("item/genzaniku")) {
aLinks[i].href = aLinks[i].href.replace("item/genzaniku", "item/genzaniku-Unique_Axe_1H_003_x1");
} else 
if (aLinks[i].href.endsWith("item/flesh-tearer")) {
aLinks[i].href = aLinks[i].href.replace("item/flesh-tearer", "item/flesh-tearer-Unique_Axe_1H_001_x1");
} else 
if (aLinks[i].href.endsWith("item/hack")) {
aLinks[i].href = aLinks[i].href.replace("item/hack", "item/hack-Unique_Axe_1H_103_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/the-wedge")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/the-wedge", "artisan/blacksmith/recipe/the-wedge");
} else 
if (aLinks[i].href.endsWith("item/the-butchers-sickle")) {
aLinks[i].href = aLinks[i].href.replace("item/the-butchers-sickle", "item/the-butchers-sickle-Unique_Axe_1H_006_x1");
} else 
if (aLinks[i].href.endsWith("item/sky-splitter")) {
aLinks[i].href = aLinks[i].href.replace("item/sky-splitter", "item/sky-splitter-Unique_Axe_1H_005_p2");
} else 
if (aLinks[i].href.endsWith("item/the-burning-axe-of-sankis")) {
aLinks[i].href = aLinks[i].href.replace("item/the-burning-axe-of-sankis", "item/the-burning-axe-of-sankis-Unique_Axe_1H_007_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/utars-roar")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/utars-roar", "artisan/blacksmith/recipe/utars-roar");
} else 
if (aLinks[i].href.endsWith("item/mordullus-promise")) {
aLinks[i].href = aLinks[i].href.replace("item/mordullus-promise", "item/mordullus-promise-P4_Unique_Axe_1H_102");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-storm")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-storm", "artisan/blacksmith/recipe/hallowed-storm");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-breach")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-breach", "artisan/blacksmith/recipe/hallowed-breach");
} else 
if (aLinks[i].href.endsWith("item/gyrfalcons-foote")) {
aLinks[i].href = aLinks[i].href.replace("item/gyrfalcons-foote", "item/gyrfalcons-foote-P61_Unique_Flail_1H_105_x1");
} else 
if (aLinks[i].href.endsWith("item/justinians-mercy")) {
aLinks[i].href = aLinks[i].href.replace("item/justinians-mercy", "item/justinians-mercy-Unique_Flail_1H_102_x1");
} else 
if (aLinks[i].href.endsWith("item/swiftmount")) {
aLinks[i].href = aLinks[i].href.replace("item/swiftmount", "item/swiftmount-Unique_Flail_1H_103_x1");
} else 
if (aLinks[i].href.endsWith("item/darklight")) {
aLinks[i].href = aLinks[i].href.replace("item/darklight", "item/darklight-P42_Unique_Flail_1H_106_x1");
} else 
if (aLinks[i].href.endsWith("item/kassars-retribution")) {
aLinks[i].href = aLinks[i].href.replace("item/kassars-retribution", "item/kassars-retribution-Unique_Flail_1H_104_x1");
} else 
if (aLinks[i].href.endsWith("item/inviolable-faith")) {
aLinks[i].href = aLinks[i].href.replace("item/inviolable-faith", "item/inviolable-faith-Unique_Flail_1H_107_x1");
} else 
if (aLinks[i].href.endsWith("item/johannas-argument-P1_flail1H_norm_unique_01")) {
aLinks[i].href = aLinks[i].href.replace("item/johannas-argument-P1_flail1H_norm_unique_01", "item/johannas-argument-P1_flail1H_norm_unique_01");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/golden-scourge")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/golden-scourge", "artisan/blacksmith/recipe/golden-scourge");
} else 
if (aLinks[i].href.endsWith("item/fleshrake")) {
aLinks[i].href = aLinks[i].href.replace("item/fleshrake", "item/fleshrake-P41_Unique_Fist_007");
} else 
if (aLinks[i].href.endsWith("item/crystal-fist")) {
aLinks[i].href = aLinks[i].href.replace("item/crystal-fist", "item/crystal-fist-P41_Unique_Fist_008");
} else 
if (aLinks[i].href.endsWith("item/scarbringer")) {
aLinks[i].href = aLinks[i].href.replace("item/scarbringer", "item/scarbringer-P61_Unique_Fist_013_x1");
} else 
if (aLinks[i].href.endsWith("item/sledge-fist")) {
aLinks[i].href = aLinks[i].href.replace("item/sledge-fist", "item/sledge-fist-Unique_Fist_012_x1");
} else 
if (aLinks[i].href.endsWith("item/jawbreaker")) {
aLinks[i].href = aLinks[i].href.replace("item/jawbreaker", "item/jawbreaker-Unique_Fist_101_x1");
} else 
if (aLinks[i].href.endsWith("item/logans-claw")) {
aLinks[i].href = aLinks[i].href.replace("item/logans-claw", "item/logans-claw-Unique_Fist_005_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demon-hand")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demon-hand", "artisan/blacksmith/recipe/demon-hand");
} else 
if (aLinks[i].href.endsWith("item/the-fist-of-azturrasq")) {
aLinks[i].href = aLinks[i].href.replace("item/the-fist-of-azturrasq", "item/the-fist-of-azturrasq-P61_Unique_Fist_009_x1");
} else 
if (aLinks[i].href.endsWith("item/won-khim-lau")) {
aLinks[i].href = aLinks[i].href.replace("item/won-khim-lau", "item/won-khim-lau-Unique_Fist_006_x1");
} else 
if (aLinks[i].href.endsWith("item/rabid-strike")) {
aLinks[i].href = aLinks[i].href.replace("item/rabid-strike", "item/rabid-strike-P43_Unique_Fist_003_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/demon-claw")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/demon-claw", "artisan/blacksmith/recipe/demon-claw");
} else 
if (aLinks[i].href.endsWith("item/lions-claw-P1_fistWeapon_norm_unique_01")) {
aLinks[i].href = aLinks[i].href.replace("item/lions-claw-P1_fistWeapon_norm_unique_01", "item/lions-claw-P1_fistWeapon_norm_unique_01");
} else 
if (aLinks[i].href.endsWith("item/vengeful-wind-P4_fistWeapon_norm_unique_02")) {
aLinks[i].href = aLinks[i].href.replace("item/vengeful-wind-P4_fistWeapon_norm_unique_02", "item/vengeful-wind-P4_fistWeapon_norm_unique_02");
} else 
if (aLinks[i].href.endsWith("item/kyoshiros-blade")) {
aLinks[i].href = aLinks[i].href.replace("item/kyoshiros-blade", "item/kyoshiros-blade-P4_Unique_Fist_102");
} else 
if (aLinks[i].href.endsWith("item/shenlongs-fist-of-legend")) {
aLinks[i].href = aLinks[i].href.replace("item/shenlongs-fist-of-legend", "item/shenlongs-fist-of-legend-Unique_Fist_011_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-hand")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-hand", "artisan/blacksmith/recipe/hallowed-hand");
} else 
if (aLinks[i].href.endsWith("item/shenlongs-relentless-assault")) {
aLinks[i].href = aLinks[i].href.replace("item/shenlongs-relentless-assault", "item/shenlongs-relentless-assault-Unique_Fist_010_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-hold")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-hold", "artisan/blacksmith/recipe/hallowed-hold");
} else 
if (aLinks[i].href.endsWith("item/fjord-cutter")) {
aLinks[i].href = aLinks[i].href.replace("item/fjord-cutter", "item/fjord-cutter-P3_Unique_Mighty_1H_006");
} else 
if (aLinks[i].href.endsWith("item/ambos-pride")) {
aLinks[i].href = aLinks[i].href.replace("item/ambos-pride", "item/ambos-pride-Unique_Mighty_1H_012_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/harvest-moon")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/harvest-moon", "artisan/blacksmith/recipe/harvest-moon");
} else 
if (aLinks[i].href.endsWith("item/blade-of-the-warlord")) {
aLinks[i].href = aLinks[i].href.replace("item/blade-of-the-warlord", "item/blade-of-the-warlord-P4_Unique_Mighty_1H_005");
} else 
if (aLinks[i].href.endsWith("item/remorseless")) {
aLinks[i].href = aLinks[i].href.replace("item/remorseless", "item/remorseless-Unique_Mighty_1H_102_x1");
} else 
if (aLinks[i].href.endsWith("item/oathkeeper")) {
aLinks[i].href = aLinks[i].href.replace("item/oathkeeper", "item/oathkeeper-P4_Unique_Mighty_1H_104");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/nights-reaping")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/nights-reaping", "artisan/blacksmith/recipe/nights-reaping");
} else 
if (aLinks[i].href.endsWith("item/dishonored-legacy")) {
aLinks[i].href = aLinks[i].href.replace("item/dishonored-legacy", "item/dishonored-legacy-Unique_Mighty_1H_103_x1");
} else 
if (aLinks[i].href.endsWith("item/bulkathoss-warrior-blood")) {
aLinks[i].href = aLinks[i].href.replace("item/bulkathoss-warrior-blood", "item/bulkathoss-warrior-blood-Unique_Mighty_1H_011_x1");
} else 
if (aLinks[i].href.endsWith("item/bulkathoss-solemn-vow")) {
aLinks[i].href = aLinks[i].href.replace("item/bulkathoss-solemn-vow", "item/bulkathoss-solemn-vow-Unique_Mighty_1H_010_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-reckoning")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-reckoning", "artisan/blacksmith/recipe/hallowed-reckoning");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-nemesis")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-nemesis", "artisan/blacksmith/recipe/hallowed-nemesis");
} else 
if (aLinks[i].href.endsWith("item/deadly-rebirth")) {
aLinks[i].href = aLinks[i].href.replace("item/deadly-rebirth", "item/deadly-rebirth-Unique_CeremonialDagger_003_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/umbral-oath")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/umbral-oath", "artisan/blacksmith/recipe/umbral-oath");
} else 
if (aLinks[i].href.endsWith("item/the-dagger-of-darts-P1_CeremonialDagger_norm_unique_02")) {
aLinks[i].href = aLinks[i].href.replace("item/the-dagger-of-darts-P1_CeremonialDagger_norm_unique_02", "item/the-dagger-of-darts-P1_CeremonialDagger_norm_unique_02");
} else 
if (aLinks[i].href.endsWith("item/the-barber")) {
aLinks[i].href = aLinks[i].href.replace("item/the-barber", "item/the-barber-P5_Unique_Dagger_003_x1");
} else 
if (aLinks[i].href.endsWith("item/rhenho-flayer")) {
aLinks[i].href = aLinks[i].href.replace("item/rhenho-flayer", "item/rhenho-flayer-Unique_CeremonialDagger_102_x1");
} else 
if (aLinks[i].href.endsWith("item/sacred-harvester-P1_CeremonialDagger_norm_unique_01")) {
aLinks[i].href = aLinks[i].href.replace("item/sacred-harvester-P1_CeremonialDagger_norm_unique_01", "item/sacred-harvester-P1_CeremonialDagger_norm_unique_01");
} else 
if (aLinks[i].href.endsWith("item/last-breath")) {
aLinks[i].href = aLinks[i].href.replace("item/last-breath", "item/last-breath-P4_Unique_CeremonialDagger_008");
} else 
if (aLinks[i].href.endsWith("item/the-spider-queens-grasp")) {
aLinks[i].href = aLinks[i].href.replace("item/the-spider-queens-grasp", "item/the-spider-queens-grasp-Unique_CeremonialDagger_004_x1");
} else 
if (aLinks[i].href.endsWith("item/starmetal-kukri")) {
aLinks[i].href = aLinks[i].href.replace("item/starmetal-kukri", "item/starmetal-kukri-Unique_CeremonialDagger_101_x1");
} else 
if (aLinks[i].href.endsWith("item/voos-juicer")) {
aLinks[i].href = aLinks[i].href.replace("item/voos-juicer", "item/voos-juicer-P4_Unique_Dagger_002");
} else 
if (aLinks[i].href.endsWith("item/anessazi-edge")) {
aLinks[i].href = aLinks[i].href.replace("item/anessazi-edge", "item/anessazi-edge-Unique_CeremonialDagger_001_x1");
} else 
if (aLinks[i].href.endsWith("item/the-gidbinn")) {
aLinks[i].href = aLinks[i].href.replace("item/the-gidbinn", "item/the-gidbinn-Unique_CeremonialDagger_002_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/living-umbral-oath")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/living-umbral-oath", "artisan/blacksmith/recipe/living-umbral-oath");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-salvation")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-salvation", "artisan/blacksmith/recipe/hallowed-salvation");
} else 
if (aLinks[i].href.endsWith("item/manajumas-carving-knife")) {
aLinks[i].href = aLinks[i].href.replace("item/manajumas-carving-knife", "item/manajumas-carving-knife-Unique_CeremonialDagger_009_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-sufferance")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-sufferance", "artisan/blacksmith/recipe/hallowed-sufferance");
} else 
if (aLinks[i].href.endsWith("item/funerary-pick-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/funerary-pick-P6", "item/funerary-pick-P6_Unique_Scythe1H_01");
} else 
if (aLinks[i].href.endsWith("item/tragouls-corroded-fang-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/tragouls-corroded-fang-P6", "item/tragouls-corroded-fang-P6_Unique_Scythe1H_02");
} else 
if (aLinks[i].href.endsWith("item/scythe-of-the-cycle")) {
aLinks[i].href = aLinks[i].href.replace("item/scythe-of-the-cycle", "item/scythe-of-the-cycle-P61_Unique_Scythe1H_03");
} else 
if (aLinks[i].href.endsWith("item/jesseth-skullscythe-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/jesseth-skullscythe-P6", "item/jesseth-skullscythe-P6_Unique_Scythe1H_04");
} else 
if (aLinks[i].href.endsWith("item/fletchers-pride")) {
aLinks[i].href = aLinks[i].href.replace("item/fletchers-pride", "item/fletchers-pride-Unique_Quiver_006_x1");
} else 
if (aLinks[i].href.endsWith("item/sin-seekers")) {
aLinks[i].href = aLinks[i].href.replace("item/sin-seekers", "item/sin-seekers-P43_Unique_Quiver_001");
} else 
if (aLinks[i].href.endsWith("item/spines-of-seething-hatred")) {
aLinks[i].href = aLinks[i].href.replace("item/spines-of-seething-hatred", "item/spines-of-seething-hatred-Unique_Quiver_005_p1");
} else 
if (aLinks[i].href.endsWith("item/holy-point-shot")) {
aLinks[i].href = aLinks[i].href.replace("item/holy-point-shot", "item/holy-point-shot-P5_Unique_Quiver_004_x1");
} else 
if (aLinks[i].href.endsWith("item/emimeis-duffel")) {
aLinks[i].href = aLinks[i].href.replace("item/emimeis-duffel", "item/emimeis-duffel-Unique_Quiver_103_x1");
} else 
if (aLinks[i].href.endsWith("item/the-ninth-cirri-satchel")) {
aLinks[i].href = aLinks[i].href.replace("item/the-ninth-cirri-satchel", "item/the-ninth-cirri-satchel-Unique_Quiver_101_x1");
} else 
if (aLinks[i].href.endsWith("item/bombardiers-rucksack")) {
aLinks[i].href = aLinks[i].href.replace("item/bombardiers-rucksack", "item/bombardiers-rucksack-Unique_Quiver_102_x1");
} else 
if (aLinks[i].href.endsWith("item/augustines-panacea")) {
aLinks[i].href = aLinks[i].href.replace("item/augustines-panacea", "item/augustines-panacea-P41_Unique_Quiver_001");
} else 
if (aLinks[i].href.endsWith("item/dead-mans-legacy")) {
aLinks[i].href = aLinks[i].href.replace("item/dead-mans-legacy", "item/dead-mans-legacy-P61_Unique_Quiver_007");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/black-bone-arrows")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/black-bone-arrows", "artisan/blacksmith/recipe/black-bone-arrows");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/archfiend-arrows")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/archfiend-arrows", "artisan/blacksmith/recipe/archfiend-arrows");
} else 
if (aLinks[i].href.endsWith("item/denial")) {
aLinks[i].href = aLinks[i].href.replace("item/denial", "item/denial-P61_Unique_Shield_007");
} else 
if (aLinks[i].href.endsWith("item/covens-criterion")) {
aLinks[i].href = aLinks[i].href.replace("item/covens-criterion", "item/covens-criterion-Unique_Shield_107_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/wall-of-bone")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/wall-of-bone", "artisan/blacksmith/recipe/wall-of-bone");
} else 
if (aLinks[i].href.endsWith("item/votoyias-spiker")) {
aLinks[i].href = aLinks[i].href.replace("item/votoyias-spiker", "item/votoyias-spiker-Unique_Shield_104_x1");
} else 
if (aLinks[i].href.endsWith("item/freeze-of-deflection")) {
aLinks[i].href = aLinks[i].href.replace("item/freeze-of-deflection", "item/freeze-of-deflection-Unique_Shield_004_x1");
} else 
if (aLinks[i].href.endsWith("item/defender-of-westmarch")) {
aLinks[i].href = aLinks[i].href.replace("item/defender-of-westmarch", "item/defender-of-westmarch-Unique_Shield_101_p2");
} else 
if (aLinks[i].href.endsWith("item/eberli-charo")) {
aLinks[i].href = aLinks[i].href.replace("item/eberli-charo", "item/eberli-charo-Unique_Shield_102_x1");
} else 
if (aLinks[i].href.endsWith("item/lidless-wall")) {
aLinks[i].href = aLinks[i].href.replace("item/lidless-wall", "item/lidless-wall-Unique_Shield_008_x1");
} else 
if (aLinks[i].href.endsWith("item/stormshield")) {
aLinks[i].href = aLinks[i].href.replace("item/stormshield", "item/stormshield-Unique_Shield_009_x1");
} else 
if (aLinks[i].href.endsWith("item/ivory-tower")) {
aLinks[i].href = aLinks[i].href.replace("item/ivory-tower", "item/ivory-tower-P2_Unique_Shield_002");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/wall-of-man")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/wall-of-man", "artisan/blacksmith/recipe/wall-of-man");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-defender")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-defender", "artisan/blacksmith/recipe/hallowed-defender");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-barricade")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-barricade", "artisan/blacksmith/recipe/hallowed-barricade");
} else 
if (aLinks[i].href.endsWith("item/jesseth-skullshield-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/jesseth-skullshield-P6", "item/jesseth-skullshield-P6_Unique_Shield_01");
} else 
if (aLinks[i].href.endsWith("item/salvation")) {
aLinks[i].href = aLinks[i].href.replace("item/salvation", "item/salvation-Unique_CruShield_108_x1");
} else 
if (aLinks[i].href.endsWith("item/shield-of-fury")) {
aLinks[i].href = aLinks[i].href.replace("item/shield-of-fury", "item/shield-of-fury-P61_Unique_Shield_106_x1");
} else 
if (aLinks[i].href.endsWith("item/the-final-witness")) {
aLinks[i].href = aLinks[i].href.replace("item/the-final-witness", "item/the-final-witness-Unique_CruShield_107_x1");
} else 
if (aLinks[i].href.endsWith("item/hallowed-bulwark")) {
aLinks[i].href = aLinks[i].href.replace("item/hallowed-bulwark", "item/hallowed-bulwark-Unique_CruShield_103_x1");
} else 
if (aLinks[i].href.endsWith("item/jekangbord")) {
aLinks[i].href = aLinks[i].href.replace("item/jekangbord", "item/jekangbord-P61_Unique_CruShield_102_x1");
} else 
if (aLinks[i].href.endsWith("item/sublime-conviction")) {
aLinks[i].href = aLinks[i].href.replace("item/sublime-conviction", "item/sublime-conviction-Unique_CruShield_106_x1");
} else 
if (aLinks[i].href.endsWith("item/akarats-awakening")) {
aLinks[i].href = aLinks[i].href.replace("item/akarats-awakening", "item/akarats-awakening-Unique_CruShield_104_x1");
} else 
if (aLinks[i].href.endsWith("item/hellskull")) {
aLinks[i].href = aLinks[i].href.replace("item/hellskull", "item/hellskull-Unique_CruShield_105_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/piro-marella")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/piro-marella", "artisan/blacksmith/recipe/piro-marella");
} else 
if (aLinks[i].href.endsWith("item/guard-of-johanna")) {
aLinks[i].href = aLinks[i].href.replace("item/guard-of-johanna", "item/guard-of-johanna-Unique_Shield_103_x1");
} else 
if (aLinks[i].href.endsWith("item/frydehrs-wrath-P61_CruShield_norm_unique_01")) {
aLinks[i].href = aLinks[i].href.replace("item/frydehrs-wrath-P61_CruShield_norm_unique_01", "item/frydehrs-wrath-P61_CruShield_norm_unique_01");
} else 
if (aLinks[i].href.endsWith("item/unrelenting-phalanx-P1_CruShield_norm_unique_02")) {
aLinks[i].href = aLinks[i].href.replace("item/unrelenting-phalanx-P1_CruShield_norm_unique_02", "item/unrelenting-phalanx-P1_CruShield_norm_unique_02");
} else 
if (aLinks[i].href.endsWith("item/shield-of-the-steed")) {
aLinks[i].href = aLinks[i].href.replace("item/shield-of-the-steed", "item/shield-of-the-steed-P4_Unique_Shield_Set_01_x1");
} else 
if (aLinks[i].href.endsWith("item/winter-flurry")) {
aLinks[i].href = aLinks[i].href.replace("item/winter-flurry", "item/winter-flurry-Unique_Orb_005_x1");
} else 
if (aLinks[i].href.endsWith("item/etched-sigil")) {
aLinks[i].href = aLinks[i].href.replace("item/etched-sigil", "item/etched-sigil-P61_Unique_Orb_002");
} else 
if (aLinks[i].href.endsWith("item/mirrorball")) {
aLinks[i].href = aLinks[i].href.replace("item/mirrorball", "item/mirrorball-Unique_Orb_101_x1");
} else 
if (aLinks[i].href.endsWith("item/light-of-grace")) {
aLinks[i].href = aLinks[i].href.replace("item/light-of-grace", "item/light-of-grace-Unique_Orb_103_x1");
} else 
if (aLinks[i].href.endsWith("item/mykens-ball-of-hate")) {
aLinks[i].href = aLinks[i].href.replace("item/mykens-ball-of-hate", "item/mykens-ball-of-hate-Unique_Orb_102_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/singularity")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/singularity", "artisan/blacksmith/recipe/singularity");
} else 
if (aLinks[i].href.endsWith("item/triumvirate")) {
aLinks[i].href = aLinks[i].href.replace("item/triumvirate", "item/triumvirate-P61_Unique_Orb_003");
} else 
if (aLinks[i].href.endsWith("item/the-oculus")) {
aLinks[i].href = aLinks[i].href.replace("item/the-oculus", "item/the-oculus-Unique_Orb_001_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cosmic-strand")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cosmic-strand", "artisan/blacksmith/recipe/cosmic-strand");
} else 
if (aLinks[i].href.endsWith("item/primordial-soul")) {
aLinks[i].href = aLinks[i].href.replace("item/primordial-soul", "item/primordial-soul-P4_Unique_Orb_001");
} else 
if (aLinks[i].href.endsWith("item/orb-of-infinite-depth")) {
aLinks[i].href = aLinks[i].href.replace("item/orb-of-infinite-depth", "item/orb-of-infinite-depth-P61_Unique_Orb_004");
} else 
if (aLinks[i].href.endsWith("item/chantodos-force")) {
aLinks[i].href = aLinks[i].href.replace("item/chantodos-force", "item/chantodos-force-Unique_Orb_011_x1");
} else 
if (aLinks[i].href.endsWith("item/tal-rashas-unwavering-glare")) {
aLinks[i].href = aLinks[i].href.replace("item/tal-rashas-unwavering-glare", "item/tal-rashas-unwavering-glare-Unique_Orb_012_x1");
} else 
if (aLinks[i].href.endsWith("item/firebirds-eye")) {
aLinks[i].href = aLinks[i].href.replace("item/firebirds-eye", "item/firebirds-eye-Unique_Orb_Set_06_x1");
} else 
if (aLinks[i].href.endsWith("item/gazing-demise")) {
aLinks[i].href = aLinks[i].href.replace("item/gazing-demise", "item/gazing-demise-P42_Unique_Mojo_003_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/bitterness")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/bitterness", "artisan/blacksmith/recipe/bitterness");
} else 
if (aLinks[i].href.endsWith("item/homunculus")) {
aLinks[i].href = aLinks[i].href.replace("item/homunculus", "item/homunculus-P42_Unique_Mojo_004");
} else 
if (aLinks[i].href.endsWith("item/shukranis-triumph")) {
aLinks[i].href = aLinks[i].href.replace("item/shukranis-triumph", "item/shukranis-triumph-Unique_Mojo_102_x1");
} else 
if (aLinks[i].href.endsWith("item/thing-of-the-deep")) {
aLinks[i].href = aLinks[i].href.replace("item/thing-of-the-deep", "item/thing-of-the-deep-P4_Unique_Mojo_002");
} else 
if (aLinks[i].href.endsWith("item/uhkapian-serpent")) {
aLinks[i].href = aLinks[i].href.replace("item/uhkapian-serpent", "item/uhkapian-serpent-Unique_Mojo_008_x1");
} else 
if (aLinks[i].href.endsWith("item/henris-perquisition-P2_mojo_norm_unique_02")) {
aLinks[i].href = aLinks[i].href.replace("item/henris-perquisition-P2_mojo_norm_unique_02", "item/henris-perquisition-P2_mojo_norm_unique_02");
} else 
if (aLinks[i].href.endsWith("item/vile-hive")) {
aLinks[i].href = aLinks[i].href.replace("item/vile-hive", "item/vile-hive-P4_Unique_Mojo_001");
} else 
if (aLinks[i].href.endsWith("item/wilkens-reach")) {
aLinks[i].href = aLinks[i].href.replace("item/wilkens-reach", "item/wilkens-reach-P4_Unique_Mojo_003");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/spite")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/spite", "artisan/blacksmith/recipe/spite");
} else 
if (aLinks[i].href.endsWith("item/manajumas-gory-fetch")) {
aLinks[i].href = aLinks[i].href.replace("item/manajumas-gory-fetch", "item/manajumas-gory-fetch-Unique_Mojo_010_x1");
} else 
if (aLinks[i].href.endsWith("item/zunimassas-string-of-skulls")) {
aLinks[i].href = aLinks[i].href.replace("item/zunimassas-string-of-skulls", "item/zunimassas-string-of-skulls-Unique_Mojo_011_x1");
} else 
if (aLinks[i].href.endsWith("item/lost-time")) {
aLinks[i].href = aLinks[i].href.replace("item/lost-time", "item/lost-time-P61_Unique_Phylactery_01");
} else 
if (aLinks[i].href.endsWith("item/iron-rose-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/iron-rose-P6", "item/iron-rose-P6_Unique_Phylactery_04");
} else 
if (aLinks[i].href.endsWith("item/legers-disdain")) {
aLinks[i].href = aLinks[i].href.replace("item/legers-disdain", "item/legers-disdain-P61_Unique_Phylactery_03");
} else 
if (aLinks[i].href.endsWith("item/bone-ringer-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/bone-ringer-P6", "item/bone-ringer-P6_Unique_Phylactery_02");
} else 
if (aLinks[i].href.endsWith("item/the-zweihander")) {
aLinks[i].href = aLinks[i].href.replace("item/the-zweihander", "item/the-zweihander-Unique_Sword_2H_002_x1");
} else 
if (aLinks[i].href.endsWith("item/faithful-memory")) {
aLinks[i].href = aLinks[i].href.replace("item/faithful-memory", "item/faithful-memory-P61_Unique_Sword_2H_012_x1");
} else 
if (aLinks[i].href.endsWith("item/scourge")) {
aLinks[i].href = aLinks[i].href.replace("item/scourge", "item/scourge-Unique_Sword_2H_004_x1");
} else 
if (aLinks[i].href.endsWith("item/blackguard")) {
aLinks[i].href = aLinks[i].href.replace("item/blackguard", "item/blackguard-Unique_Sword_2H_011_x1");
} else 
if (aLinks[i].href.endsWith("item/stalgards-decimator")) {
aLinks[i].href = aLinks[i].href.replace("item/stalgards-decimator", "item/stalgards-decimator-Unique_Sword_2H_101_x1");
} else 
if (aLinks[i].href.endsWith("item/the-sultan-of-blinding-sand")) {
aLinks[i].href = aLinks[i].href.replace("item/the-sultan-of-blinding-sand", "item/the-sultan-of-blinding-sand-Unique_Sword_2H_008_x1");
} else 
if (aLinks[i].href.endsWith("item/blade-of-prophecy")) {
aLinks[i].href = aLinks[i].href.replace("item/blade-of-prophecy", "item/blade-of-prophecy-P61_Unique_Sword_2H_007_x1");
} else 
if (aLinks[i].href.endsWith("item/the-grandfather")) {
aLinks[i].href = aLinks[i].href.replace("item/the-grandfather", "item/the-grandfather-Unique_Sword_2H_001_x1");
} else 
if (aLinks[i].href.endsWith("item/maximus")) {
aLinks[i].href = aLinks[i].href.replace("item/maximus", "item/maximus-Unique_Sword_2H_010_x1");
} else 
if (aLinks[i].href.endsWith("item/warmonger")) {
aLinks[i].href = aLinks[i].href.replace("item/warmonger", "item/warmonger-Unique_Sword_2H_003_x1");
} else 
if (aLinks[i].href.endsWith("item/cams-rebuttal")) {
aLinks[i].href = aLinks[i].href.replace("item/cams-rebuttal", "item/cams-rebuttal-Unique_Sword_2H_102_x1");
} else 
if (aLinks[i].href.endsWith("item/blood-brother")) {
aLinks[i].href = aLinks[i].href.replace("item/blood-brother", "item/blood-brother-Unique_Sword_2H_103_x1");
} else 
if (aLinks[i].href.endsWith("item/corrupted-ashbringer")) {
aLinks[i].href = aLinks[i].href.replace("item/corrupted-ashbringer", "item/corrupted-ashbringer-Unique_Sword_2H_104_x1");
} else 
if (aLinks[i].href.endsWith("item/pledge-of-caldeum")) {
aLinks[i].href = aLinks[i].href.replace("item/pledge-of-caldeum", "item/pledge-of-caldeum-Unique_Polearm_002_x1");
} else 
if (aLinks[i].href.endsWith("item/standoff")) {
aLinks[i].href = aLinks[i].href.replace("item/standoff", "item/standoff-P61_Unique_Polearm_01");
} else 
if (aLinks[i].href.endsWith("item/bovine-bardiche")) {
aLinks[i].href = aLinks[i].href.replace("item/bovine-bardiche", "item/bovine-bardiche-Unique_Polearm_101_x1");
} else 
if (aLinks[i].href.endsWith("item/heart-slaughter")) {
aLinks[i].href = aLinks[i].href.replace("item/heart-slaughter", "item/heart-slaughter-Unique_Polearm_003_p1");
} else 
if (aLinks[i].href.endsWith("item/vigilance")) {
aLinks[i].href = aLinks[i].href.replace("item/vigilance", "item/vigilance-Unique_Polearm_001_x1");
} else 
if (aLinks[i].href.endsWith("item/arthefs-spark-of-life")) {
aLinks[i].href = aLinks[i].href.replace("item/arthefs-spark-of-life", "item/arthefs-spark-of-life-Unique_Mace_2H_003_x1");
} else 
if (aLinks[i].href.endsWith("item/crushbane")) {
aLinks[i].href = aLinks[i].href.replace("item/crushbane", "item/crushbane-Unique_Mace_2H_001_x1");
} else 
if (aLinks[i].href.endsWith("item/soulsmasher")) {
aLinks[i].href = aLinks[i].href.replace("item/soulsmasher", "item/soulsmasher-Unique_Mace_2H_104_x1");
} else 
if (aLinks[i].href.endsWith("item/skywarden")) {
aLinks[i].href = aLinks[i].href.replace("item/skywarden", "item/skywarden-Unique_Mace_2H_010_x1");
} else 
if (aLinks[i].href.endsWith("item/wrath-of-the-bone-king")) {
aLinks[i].href = aLinks[i].href.replace("item/wrath-of-the-bone-king", "item/wrath-of-the-bone-king-Unique_Mace_2H_012_p1");
} else 
if (aLinks[i].href.endsWith("item/the-furnace")) {
aLinks[i].href = aLinks[i].href.replace("item/the-furnace", "item/the-furnace-Unique_Mace_2H_103_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cataclysm")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cataclysm", "artisan/blacksmith/recipe/cataclysm");
} else 
if (aLinks[i].href.endsWith("item/schaefers-hammer")) {
aLinks[i].href = aLinks[i].href.replace("item/schaefers-hammer", "item/schaefers-hammer-Unique_Mace_2H_009_p2");
} else 
if (aLinks[i].href.endsWith("item/sledge-of-athskeleng")) {
aLinks[i].href = aLinks[i].href.replace("item/sledge-of-athskeleng", "item/sledge-of-athskeleng-Unique_Mace_2H_002_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/sunder")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/sunder", "artisan/blacksmith/recipe/sunder");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/nightmarish-staff-of-herding")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/nightmarish-staff-of-herding", "artisan/blacksmith/recipe/nightmarish-staff-of-herding");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/infernal-staff-of-herding")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/infernal-staff-of-herding", "artisan/blacksmith/recipe/infernal-staff-of-herding");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hellish-staff-of-herding")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hellish-staff-of-herding", "artisan/blacksmith/recipe/hellish-staff-of-herding");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/staff-of-herding")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/staff-of-herding", "artisan/blacksmith/recipe/staff-of-herding");
} else 
if (aLinks[i].href.endsWith("item/staff-of-chiroptera")) {
aLinks[i].href = aLinks[i].href.replace("item/staff-of-chiroptera", "item/staff-of-chiroptera-P61_Unique_Staff_001");
} else 
if (aLinks[i].href.endsWith("item/the-broken-staff")) {
aLinks[i].href = aLinks[i].href.replace("item/the-broken-staff", "item/the-broken-staff-Unique_Staff_001_x1");
} else 
if (aLinks[i].href.endsWith("item/the-smoldering-core")) {
aLinks[i].href = aLinks[i].href.replace("item/the-smoldering-core", "item/the-smoldering-core-Unique_Staff_103_x1");
} else 
if (aLinks[i].href.endsWith("item/valtheks-rebuke")) {
aLinks[i].href = aLinks[i].href.replace("item/valtheks-rebuke", "item/valtheks-rebuke-Unique_Staff_102_x1");
} else 
if (aLinks[i].href.endsWith("item/suwong-diviner")) {
aLinks[i].href = aLinks[i].href.replace("item/suwong-diviner", "item/suwong-diviner-Unique_Staff_104_x1");
} else 
if (aLinks[i].href.endsWith("item/ahavarion-spear-of-lycander")) {
aLinks[i].href = aLinks[i].href.replace("item/ahavarion-spear-of-lycander", "item/ahavarion-spear-of-lycander-Unique_Staff_101_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/the-magi")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/the-magi", "artisan/blacksmith/recipe/the-magi");
} else 
if (aLinks[i].href.endsWith("item/wormwood")) {
aLinks[i].href = aLinks[i].href.replace("item/wormwood", "item/wormwood-P2_Unique_Staff_003");
} else 
if (aLinks[i].href.endsWith("item/maloths-focus")) {
aLinks[i].href = aLinks[i].href.replace("item/maloths-focus", "item/maloths-focus-Unique_Staff_006_x1");
} else 
if (aLinks[i].href.endsWith("item/the-tormentor")) {
aLinks[i].href = aLinks[i].href.replace("item/the-tormentor", "item/the-tormentor-Unique_Staff_007_x1");
} else 
if (aLinks[i].href.endsWith("item/the-grand-vizier")) {
aLinks[i].href = aLinks[i].href.replace("item/the-grand-vizier", "item/the-grand-vizier-P61_Unique_Staff_009");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/mark-of-the-magi")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/mark-of-the-magi", "artisan/blacksmith/recipe/mark-of-the-magi");
} else 
if (aLinks[i].href.endsWith("item/the-executioner")) {
aLinks[i].href = aLinks[i].href.replace("item/the-executioner", "item/the-executioner-Unique_Axe_2H_003_x1");
} else 
if (aLinks[i].href.endsWith("item/burst-of-wrath")) {
aLinks[i].href = aLinks[i].href.replace("item/burst-of-wrath", "item/burst-of-wrath-Unique_Axe_2H_103_x1");
} else 
if (aLinks[i].href.endsWith("item/butchers-carver")) {
aLinks[i].href = aLinks[i].href.replace("item/butchers-carver", "item/butchers-carver-Unique_Axe_2H_001_x1");
} else 
if (aLinks[i].href.endsWith("item/messerschmidts-reaver")) {
aLinks[i].href = aLinks[i].href.replace("item/messerschmidts-reaver", "item/messerschmidts-reaver-Unique_Axe_2H_011_x1");
} else 
if (aLinks[i].href.endsWith("item/skorn")) {
aLinks[i].href = aLinks[i].href.replace("item/skorn", "item/skorn-Unique_Axe_2H_009_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/fire-brand")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/fire-brand", "artisan/blacksmith/recipe/fire-brand");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/cinder-switch")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/cinder-switch", "artisan/blacksmith/recipe/cinder-switch");
} else 
if (aLinks[i].href.endsWith("item/flail-of-the-ascended")) {
aLinks[i].href = aLinks[i].href.replace("item/flail-of-the-ascended", "item/flail-of-the-ascended-P4_Unique_Flail_2H_002");
} else 
if (aLinks[i].href.endsWith("item/akkhans-addendum")) {
aLinks[i].href = aLinks[i].href.replace("item/akkhans-addendum", "item/akkhans-addendum-P4_Unique_Flail_2H_001");
} else 
if (aLinks[i].href.endsWith("item/golden-flense")) {
aLinks[i].href = aLinks[i].href.replace("item/golden-flense", "item/golden-flense-P61_Unique_Flail_2H_104");
} else 
if (aLinks[i].href.endsWith("item/baleful-remnant")) {
aLinks[i].href = aLinks[i].href.replace("item/baleful-remnant", "item/baleful-remnant-Unique_Flail_2H_102_x1");
} else 
if (aLinks[i].href.endsWith("item/fate-of-the-fell")) {
aLinks[i].href = aLinks[i].href.replace("item/fate-of-the-fell", "item/fate-of-the-fell-P61_Unique_Flail_2H_103_x1");
} else 
if (aLinks[i].href.endsWith("item/the-mortal-drama")) {
aLinks[i].href = aLinks[i].href.replace("item/the-mortal-drama", "item/the-mortal-drama-Unique_Flail_2H_101_x1");
} else 
if (aLinks[i].href.endsWith("item/akkhans-leniency-P4_flail2H_norm_unique_01")) {
aLinks[i].href = aLinks[i].href.replace("item/akkhans-leniency-P4_flail2H_norm_unique_01", "item/akkhans-leniency-P4_flail2H_norm_unique_01");
} else 
if (aLinks[i].href.endsWith("item/flail-of-the-charge")) {
aLinks[i].href = aLinks[i].href.replace("item/flail-of-the-charge", "item/flail-of-the-charge-P4_Unique_Flail_2H_Set_01_x1");
} else 
if (aLinks[i].href.endsWith("item/balance")) {
aLinks[i].href = aLinks[i].href.replace("item/balance", "item/balance-P61_Unique_CombatStaff_2H_001");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/lai-yuis-taiji")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/lai-yuis-taiji", "artisan/blacksmith/recipe/lai-yuis-taiji");
} else 
if (aLinks[i].href.endsWith("item/the-flow-of-eternity")) {
aLinks[i].href = aLinks[i].href.replace("item/the-flow-of-eternity", "item/the-flow-of-eternity-P41_Unique_CombatStaff_2H_005");
} else 
if (aLinks[i].href.endsWith("item/the-paddle")) {
aLinks[i].href = aLinks[i].href.replace("item/the-paddle", "item/the-paddle-Unique_CombatStaff_2H_007_x1");
} else 
if (aLinks[i].href.endsWith("item/warstaff-of-general-quang")) {
aLinks[i].href = aLinks[i].href.replace("item/warstaff-of-general-quang", "item/warstaff-of-general-quang-Unique_CombatStaff_2H_102_x1");
} else 
if (aLinks[i].href.endsWith("item/staff-of-kyro")) {
aLinks[i].href = aLinks[i].href.replace("item/staff-of-kyro", "item/staff-of-kyro-Unique_CombatStaff_2H_101_x1");
} else 
if (aLinks[i].href.endsWith("item/incense-torch-of-the-grand-temple")) {
aLinks[i].href = aLinks[i].href.replace("item/incense-torch-of-the-grand-temple", "item/incense-torch-of-the-grand-temple-P61_Unique_CombatStaff_2H_003_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/rozpedins-staff")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/rozpedins-staff", "artisan/blacksmith/recipe/rozpedins-staff");
} else 
if (aLinks[i].href.endsWith("item/flying-dragon")) {
aLinks[i].href = aLinks[i].href.replace("item/flying-dragon", "item/flying-dragon-Unique_CombatStaff_2H_009_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/rozpedins-force")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/rozpedins-force", "artisan/blacksmith/recipe/rozpedins-force");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/lai-yuis-persuader")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/lai-yuis-persuader", "artisan/blacksmith/recipe/lai-yuis-persuader");
} else 
if (aLinks[i].href.endsWith("item/innas-reach")) {
aLinks[i].href = aLinks[i].href.replace("item/innas-reach", "item/innas-reach-Unique_CombatStaff_2H_001_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/unending-war")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/unending-war", "artisan/blacksmith/recipe/unending-war");
} else 
if (aLinks[i].href.endsWith("item/bastions-revered")) {
aLinks[i].href = aLinks[i].href.replace("item/bastions-revered", "item/bastions-revered-Unique_Mighty_2H_004_p1");
} else 
if (aLinks[i].href.endsWith("item/fury-of-the-vanished-peak")) {
aLinks[i].href = aLinks[i].href.replace("item/fury-of-the-vanished-peak", "item/fury-of-the-vanished-peak-P61_Unique_Mighty_2H_006");
} else 
if (aLinks[i].href.endsWith("item/madawcs-sorrow")) {
aLinks[i].href = aLinks[i].href.replace("item/madawcs-sorrow", "item/madawcs-sorrow-Unique_Mighty_2H_101_x1");
} else 
if (aLinks[i].href.endsWith("item/the-gavel-of-judgment")) {
aLinks[i].href = aLinks[i].href.replace("item/the-gavel-of-judgment", "item/the-gavel-of-judgment-P61_Unique_Mighty_2H_001");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/war-of-the-dead")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/war-of-the-dead", "artisan/blacksmith/recipe/war-of-the-dead");
} else 
if (aLinks[i].href.endsWith("item/blade-of-the-tribes")) {
aLinks[i].href = aLinks[i].href.replace("item/blade-of-the-tribes", "item/blade-of-the-tribes-P4_Unique_Mighty_2H_101");
} else 
if (aLinks[i].href.endsWith("item/immortal-kings-boulder-breaker")) {
aLinks[i].href = aLinks[i].href.replace("item/immortal-kings-boulder-breaker", "item/immortal-kings-boulder-breaker-Unique_Mighty_2H_010_x1");
} else 
if (aLinks[i].href.endsWith("item/reilenas-shadowhook-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/reilenas-shadowhook-P6", "item/reilenas-shadowhook-P6_Unique_Scythe2H_03");
} else 
if (aLinks[i].href.endsWith("item/maltorius-petrified-spike")) {
aLinks[i].href = aLinks[i].href.replace("item/maltorius-petrified-spike", "item/maltorius-petrified-spike-P61_Unique_Scythe2H_01");
} else 
if (aLinks[i].href.endsWith("item/bloodtide-blade")) {
aLinks[i].href = aLinks[i].href.replace("item/bloodtide-blade", "item/bloodtide-blade-P61_Unique_Scythe2H_02");
} else 
if (aLinks[i].href.endsWith("item/nayrs-black-death")) {
aLinks[i].href = aLinks[i].href.replace("item/nayrs-black-death", "item/nayrs-black-death-P61_Unique_Scythe2H_04");
} else 
if (aLinks[i].href.endsWith("item/demon-machine")) {
aLinks[i].href = aLinks[i].href.replace("item/demon-machine", "item/demon-machine-Unique_XBow_001_x1");
} else 
if (aLinks[i].href.endsWith("item/burizado-kyanon")) {
aLinks[i].href = aLinks[i].href.replace("item/burizado-kyanon", "item/burizado-kyanon-Unique_XBow_011_x1");
} else 
if (aLinks[i].href.endsWith("item/bakkan-caster")) {
aLinks[i].href = aLinks[i].href.replace("item/bakkan-caster", "item/bakkan-caster-Unique_XBow_006_x1");
} else 
if (aLinks[i].href.endsWith("item/pus-spitter")) {
aLinks[i].href = aLinks[i].href.replace("item/pus-spitter", "item/pus-spitter-Unique_XBow_012_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/starspine")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/starspine", "artisan/blacksmith/recipe/starspine");
} else 
if (aLinks[i].href.endsWith("item/hellrack")) {
aLinks[i].href = aLinks[i].href.replace("item/hellrack", "item/hellrack-Unique_XBow_002_x1");
} else 
if (aLinks[i].href.endsWith("item/manticore")) {
aLinks[i].href = aLinks[i].href.replace("item/manticore", "item/manticore-P61_Unique_XBow_001");
} else 
if (aLinks[i].href.endsWith("item/wojahnni-assaulter")) {
aLinks[i].href = aLinks[i].href.replace("item/wojahnni-assaulter", "item/wojahnni-assaulter-P41_Unique_Xbow_102");
} else 
if (aLinks[i].href.endsWith("item/chanon-bolter")) {
aLinks[i].href = aLinks[i].href.replace("item/chanon-bolter", "item/chanon-bolter-Unique_Xbow_101_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/arcane-barb")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/arcane-barb", "artisan/blacksmith/recipe/arcane-barb");
} else 
if (aLinks[i].href.endsWith("item/uskang")) {
aLinks[i].href = aLinks[i].href.replace("item/uskang", "item/uskang-Unique_Bow_005_p1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/longshot")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/longshot", "artisan/blacksmith/recipe/longshot");
} else 
if (aLinks[i].href.endsWith("item/the-ravens-wing")) {
aLinks[i].href = aLinks[i].href.replace("item/the-ravens-wing", "item/the-ravens-wing-Unique_Bow_008_x1");
} else 
if (aLinks[i].href.endsWith("item/etrayu")) {
aLinks[i].href = aLinks[i].href.replace("item/etrayu", "item/etrayu-Unique_Bow_001_p1");
} else 
if (aLinks[i].href.endsWith("item/kridershot")) {
aLinks[i].href = aLinks[i].href.replace("item/kridershot", "item/kridershot-Unique_Bow_101_x1");
} else 
if (aLinks[i].href.endsWith("item/cluckeye")) {
aLinks[i].href = aLinks[i].href.replace("item/cluckeye", "item/cluckeye-Unique_Bow_015_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/venomhusk")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/venomhusk", "artisan/blacksmith/recipe/venomhusk");
} else 
if (aLinks[i].href.endsWith("item/windforce")) {
aLinks[i].href = aLinks[i].href.replace("item/windforce", "item/windforce-Unique_Bow_009_x1");
} else 
if (aLinks[i].href.endsWith("item/yangs-recurve")) {
aLinks[i].href = aLinks[i].href.replace("item/yangs-recurve", "item/yangs-recurve-P61_Unique_Bow_104_x1");
} else 
if (aLinks[i].href.endsWith("item/leonine-bow-of-hashir")) {
aLinks[i].href = aLinks[i].href.replace("item/leonine-bow-of-hashir", "item/leonine-bow-of-hashir-Unique_Bow_103_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/sydyru-crust")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/sydyru-crust", "artisan/blacksmith/recipe/sydyru-crust");
} else 
if (aLinks[i].href.endsWith("item/odysseys-end")) {
aLinks[i].href = aLinks[i].href.replace("item/odysseys-end", "item/odysseys-end-Unique_Bow_102_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/unbound-bolt")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/unbound-bolt", "artisan/blacksmith/recipe/unbound-bolt");
} else 
if (aLinks[i].href.endsWith("item/helltrapper")) {
aLinks[i].href = aLinks[i].href.replace("item/helltrapper", "item/helltrapper-Unique_HandXBow_102_x1");
} else 
if (aLinks[i].href.endsWith("item/vallas-bequest")) {
aLinks[i].href = aLinks[i].href.replace("item/vallas-bequest", "item/vallas-bequest-P43_Unique_HandXBow_005");
} else 
if (aLinks[i].href.endsWith("item/balefire-caster")) {
aLinks[i].href = aLinks[i].href.replace("item/balefire-caster", "item/balefire-caster-Unique_HandXBow_004_p1");
} else 
if (aLinks[i].href.endsWith("item/kmar-tenclip")) {
aLinks[i].href = aLinks[i].href.replace("item/kmar-tenclip", "item/kmar-tenclip-Unique_HandXBow_101_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/deadeye")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/deadeye", "artisan/blacksmith/recipe/deadeye");
} else 
if (aLinks[i].href.endsWith("item/dawn")) {
aLinks[i].href = aLinks[i].href.replace("item/dawn", "item/dawn-P4_Unique_HandXBow_001");
} else 
if (aLinks[i].href.endsWith("item/calamity")) {
aLinks[i].href = aLinks[i].href.replace("item/calamity", "item/calamity-Unique_HandXBow_012_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/blitzbolter")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/blitzbolter", "artisan/blacksmith/recipe/blitzbolter");
} else 
if (aLinks[i].href.endsWith("item/liannas-wings")) {
aLinks[i].href = aLinks[i].href.replace("item/liannas-wings", "item/liannas-wings-P4_Unique_HandXBow_01");
} else 
if (aLinks[i].href.endsWith("item/fortress-ballista")) {
aLinks[i].href = aLinks[i].href.replace("item/fortress-ballista", "item/fortress-ballista-P4_Unique_HandXBow_02");
} else 
if (aLinks[i].href.endsWith("item/the-demons-demise-P42_handXbow_norm_unique_03")) {
aLinks[i].href = aLinks[i].href.replace("item/the-demons-demise-P42_handXbow_norm_unique_03", "item/the-demons-demise-P42_handXbow_norm_unique_03");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-judgment")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-judgment", "artisan/blacksmith/recipe/hallowed-judgment");
} else 
if (aLinks[i].href.endsWith("item/danettas-revenge")) {
aLinks[i].href = aLinks[i].href.replace("item/danettas-revenge", "item/danettas-revenge-Unique_HandXBow_002_x1");
} else 
if (aLinks[i].href.endsWith("item/natalyas-slayer")) {
aLinks[i].href = aLinks[i].href.replace("item/natalyas-slayer", "item/natalyas-slayer-Unique_HandXBow_003_x1");
} else 
if (aLinks[i].href.endsWith("item/danettas-spite")) {
aLinks[i].href = aLinks[i].href.replace("item/danettas-spite", "item/danettas-spite-Unique_HandXBow_001_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-condemnation")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-condemnation", "artisan/blacksmith/recipe/hallowed-condemnation");
} else 
if (aLinks[i].href.endsWith("item/starfire")) {
aLinks[i].href = aLinks[i].href.replace("item/starfire", "item/starfire-P42_Unique_Wand_003_x1");
} else 
if (aLinks[i].href.endsWith("item/unstable-scepter-P61_Wand_norm_unique_02")) {
aLinks[i].href = aLinks[i].href.replace("item/unstable-scepter-P61_Wand_norm_unique_02", "item/unstable-scepter-P61_Wand_norm_unique_02");
} else 
if (aLinks[i].href.endsWith("item/blackhand-key")) {
aLinks[i].href = aLinks[i].href.replace("item/blackhand-key", "item/blackhand-key-Unique_Wand_006_x1");
} else 
if (aLinks[i].href.endsWith("item/wand-of-woh")) {
aLinks[i].href = aLinks[i].href.replace("item/wand-of-woh", "item/wand-of-woh-P61_Unique_Wand_101_x1");
} else 
if (aLinks[i].href.endsWith("item/serpents-sparker")) {
aLinks[i].href = aLinks[i].href.replace("item/serpents-sparker", "item/serpents-sparker-Unique_Wand_102_x1");
} else 
if (aLinks[i].href.endsWith("item/fragment-of-destiny")) {
aLinks[i].href = aLinks[i].href.replace("item/fragment-of-destiny", "item/fragment-of-destiny-P4_Unique_Wand_010");
} else 
if (aLinks[i].href.endsWith("item/gesture-of-orpheus")) {
aLinks[i].href = aLinks[i].href.replace("item/gesture-of-orpheus", "item/gesture-of-orpheus-P2_Unique_Wand_002");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/ruinstoke")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/ruinstoke", "artisan/blacksmith/recipe/ruinstoke");
} else 
if (aLinks[i].href.endsWith("item/sloraks-madness")) {
aLinks[i].href = aLinks[i].href.replace("item/sloraks-madness", "item/sloraks-madness-Unique_Wand_013_x1");
} else 
if (aLinks[i].href.endsWith("item/aether-walker-P1_Wand_norm_unique_01")) {
aLinks[i].href = aLinks[i].href.replace("item/aether-walker-P1_Wand_norm_unique_01", "item/aether-walker-P1_Wand_norm_unique_01");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/atrophy")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/atrophy", "artisan/blacksmith/recipe/atrophy");
} else 
if (aLinks[i].href.endsWith("item/chantodos-will")) {
aLinks[i].href = aLinks[i].href.replace("item/chantodos-will", "item/chantodos-will-Unique_Wand_012_x1");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-scepter")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-scepter", "artisan/blacksmith/recipe/hallowed-scepter");
} else 
if (aLinks[i].href.endsWith("artisan/blacksmith/recipe/hallowed-baton")) {
aLinks[i].href = aLinks[i].href.replace("artisan/blacksmith/recipe/hallowed-baton", "artisan/blacksmith/recipe/hallowed-baton");
} else 
if (aLinks[i].href.endsWith("artisan/jeweler/recipe/hellfire-amulet-of-intelligence")) {
aLinks[i].href = aLinks[i].href.replace("artisan/jeweler/recipe/hellfire-amulet-of-intelligence", "artisan/jeweler/recipe/hellfire-amulet-of-intelligence");
} else 
if (aLinks[i].href.endsWith("item/squirts-necklace")) {
aLinks[i].href = aLinks[i].href.replace("item/squirts-necklace", "item/squirts-necklace-Unique_Amulet_010_x1");
} else 
if (aLinks[i].href.endsWith("item/moonlight-ward")) {
aLinks[i].href = aLinks[i].href.replace("item/moonlight-ward", "item/moonlight-ward-Unique_Amulet_003_x1");
} else 
if (aLinks[i].href.endsWith("item/overwhelming-desire")) {
aLinks[i].href = aLinks[i].href.replace("item/overwhelming-desire", "item/overwhelming-desire-Unique_Amulet_106_x1");
} else 
if (aLinks[i].href.endsWith("item/golden-gorget-of-leoric")) {
aLinks[i].href = aLinks[i].href.replace("item/golden-gorget-of-leoric", "item/golden-gorget-of-leoric-Unique_Amulet_105_x1");
} else 
if (aLinks[i].href.endsWith("item/wisdom-of-kalan-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/wisdom-of-kalan-P6", "item/wisdom-of-kalan-P6_Unique_Amulet_03");
} else 
if (aLinks[i].href.endsWith("item/talisman-of-aranoch")) {
aLinks[i].href = aLinks[i].href.replace("item/talisman-of-aranoch", "item/talisman-of-aranoch-Unique_Amulet_012_x1");
} else 
if (aLinks[i].href.endsWith("item/eye-of-etlich")) {
aLinks[i].href = aLinks[i].href.replace("item/eye-of-etlich", "item/eye-of-etlich-Unique_Amulet_014_x1");
} else 
if (aLinks[i].href.endsWith("item/rondals-locket")) {
aLinks[i].href = aLinks[i].href.replace("item/rondals-locket", "item/rondals-locket-Unique_Amulet_009_x1");
} else 
if (aLinks[i].href.endsWith("item/dovu-energy-trap")) {
aLinks[i].href = aLinks[i].href.replace("item/dovu-energy-trap", "item/dovu-energy-trap-Unique_Amulet_107_x1");
} else 
if (aLinks[i].href.endsWith("item/ancestors-grace")) {
aLinks[i].href = aLinks[i].href.replace("item/ancestors-grace", "item/ancestors-grace-Unique_Amulet_102_x1");
} else 
if (aLinks[i].href.endsWith("item/countess-julias-cameo")) {
aLinks[i].href = aLinks[i].href.replace("item/countess-julias-cameo", "item/countess-julias-cameo-Unique_Amulet_103_x1");
} else 
if (aLinks[i].href.endsWith("item/rakoffs-glass-of-life")) {
aLinks[i].href = aLinks[i].href.replace("item/rakoffs-glass-of-life", "item/rakoffs-glass-of-life-Unique_Amulet_108_x1");
} else 
if (aLinks[i].href.endsWith("item/the-ess-of-johan")) {
aLinks[i].href = aLinks[i].href.replace("item/the-ess-of-johan", "item/the-ess-of-johan-Unique_Amulet_104_x1");
} else 
if (aLinks[i].href.endsWith("item/haunt-of-vaxo")) {
aLinks[i].href = aLinks[i].href.replace("item/haunt-of-vaxo", "item/haunt-of-vaxo-Unique_Amulet_101_x1");
} else 
if (aLinks[i].href.endsWith("item/the-flavor-of-time")) {
aLinks[i].href = aLinks[i].href.replace("item/the-flavor-of-time", "item/the-flavor-of-time-Unique_Amulet_001_x1");
} else 
if (aLinks[i].href.endsWith("item/holy-beacon")) {
aLinks[i].href = aLinks[i].href.replace("item/holy-beacon", "item/holy-beacon-Unique_Amulet_013_x1");
} else 
if (aLinks[i].href.endsWith("item/kymbos-gold")) {
aLinks[i].href = aLinks[i].href.replace("item/kymbos-gold", "item/kymbos-gold-Unique_Amulet_002_p1");
} else 
if (aLinks[i].href.endsWith("item/maras-kaleidoscope")) {
aLinks[i].href = aLinks[i].href.replace("item/maras-kaleidoscope", "item/maras-kaleidoscope-Unique_Amulet_015_x1");
} else 
if (aLinks[i].href.endsWith("item/ouroboros")) {
aLinks[i].href = aLinks[i].href.replace("item/ouroboros", "item/ouroboros-Unique_Amulet_005_x1");
} else 
if (aLinks[i].href.endsWith("item/the-star-of-azkaranth")) {
aLinks[i].href = aLinks[i].href.replace("item/the-star-of-azkaranth", "item/the-star-of-azkaranth-Unique_Amulet_006_x1");
} else 
if (aLinks[i].href.endsWith("item/xephirian-amulet")) {
aLinks[i].href = aLinks[i].href.replace("item/xephirian-amulet", "item/xephirian-amulet-Unique_Amulet_004_x1");
} else 
if (aLinks[i].href.endsWith("item/the-johnstone-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/the-johnstone-P6", "item/the-johnstone-P6_Unique_Amulet_01");
} else 
if (aLinks[i].href.endsWith("item/halcyons-ascent")) {
aLinks[i].href = aLinks[i].href.replace("item/halcyons-ascent", "item/halcyons-ascent-Unique_Amulet_109_x1_210");
} else 
if (aLinks[i].href.endsWith("item/haunted-visions-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/haunted-visions-P6", "item/haunted-visions-P6_Unique_Amulet_02");
} else 
if (aLinks[i].href.endsWith("item/the-travelers-pledge")) {
aLinks[i].href = aLinks[i].href.replace("item/the-travelers-pledge", "item/the-travelers-pledge-Unique_Amulet_008_x1");
} else 
if (aLinks[i].href.endsWith("item/tal-rashas-allegiance")) {
aLinks[i].href = aLinks[i].href.replace("item/tal-rashas-allegiance", "item/tal-rashas-allegiance-Unique_Amulet_007_x1");
} else 
if (aLinks[i].href.endsWith("item/blackthornes-duncraig-cross")) {
aLinks[i].href = aLinks[i].href.replace("item/blackthornes-duncraig-cross", "item/blackthornes-duncraig-cross-Unique_Amulet_016_x1");
} else 
if (aLinks[i].href.endsWith("item/sunwukos-shines")) {
aLinks[i].href = aLinks[i].href.replace("item/sunwukos-shines", "item/sunwukos-shines-Unique_Amulet_Set_11_x1");
} else 
if (aLinks[i].href.endsWith("item/talisman-of-akkhan-P43_AkkhanSet_Amulet")) {
aLinks[i].href = aLinks[i].href.replace("item/talisman-of-akkhan-P43_AkkhanSet_Amulet", "item/talisman-of-akkhan-P43_AkkhanSet_Amulet");
} else 
if (aLinks[i].href.endsWith("artisan/jeweler/recipe/hellfire-ring")) {
aLinks[i].href = aLinks[i].href.replace("artisan/jeweler/recipe/hellfire-ring", "artisan/jeweler/recipe/hellfire-ring");
} else 
if (aLinks[i].href.endsWith("artisan/jeweler/recipe/hellfire-ring-of-strength")) {
aLinks[i].href = aLinks[i].href.replace("artisan/jeweler/recipe/hellfire-ring-of-strength", "artisan/jeweler/recipe/hellfire-ring-of-strength");
} else 
if (aLinks[i].href.endsWith("item/band-of-might")) {
aLinks[i].href = aLinks[i].href.replace("item/band-of-might", "item/band-of-might-P61_Unique_Ring_05");
} else 
if (aLinks[i].href.endsWith("item/circle-of-nailujs-evol-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/circle-of-nailujs-evol-P6", "item/circle-of-nailujs-evol-P6_Unique_Ring_01");
} else 
if (aLinks[i].href.endsWith("item/ring-of-royal-grandeur")) {
aLinks[i].href = aLinks[i].href.replace("item/ring-of-royal-grandeur", "item/ring-of-royal-grandeur-Unique_Ring_107_x1");
} else 
if (aLinks[i].href.endsWith("item/pandemonium-loop")) {
aLinks[i].href = aLinks[i].href.replace("item/pandemonium-loop", "item/pandemonium-loop-Unique_Ring_109_x1");
} else 
if (aLinks[i].href.endsWith("item/avarice-band")) {
aLinks[i].href = aLinks[i].href.replace("item/avarice-band", "item/avarice-band-Unique_Ring_108_x1");
} else 
if (aLinks[i].href.endsWith("item/leorics-signet")) {
aLinks[i].href = aLinks[i].href.replace("item/leorics-signet", "item/leorics-signet-Unique_Ring_002_x1");
} else 
if (aLinks[i].href.endsWith("item/pandemonium-loop")) {
aLinks[i].href = aLinks[i].href.replace("item/pandemonium-loop", "item/pandemonium-loop-Unique_Ring_109_p2");
} else 
if (aLinks[i].href.endsWith("item/manald-heal")) {
aLinks[i].href = aLinks[i].href.replace("item/manald-heal", "item/manald-heal-P43_Unique_Ring_021_x1");
} else 
if (aLinks[i].href.endsWith("item/broken-promises")) {
aLinks[i].href = aLinks[i].href.replace("item/broken-promises", "item/broken-promises-Unique_Ring_006_p2");
} else 
if (aLinks[i].href.endsWith("item/puzzle-ring")) {
aLinks[i].href = aLinks[i].href.replace("item/puzzle-ring", "item/puzzle-ring-Unique_Ring_004_x1");
} else 
if (aLinks[i].href.endsWith("item/halo-of-karini")) {
aLinks[i].href = aLinks[i].href.replace("item/halo-of-karini", "item/halo-of-karini-P61_Unique_Ring_03");
} else 
if (aLinks[i].href.endsWith("item/the-tall-mans-finger")) {
aLinks[i].href = aLinks[i].href.replace("item/the-tall-mans-finger", "item/the-tall-mans-finger-Unique_Ring_101_x1");
} else 
if (aLinks[i].href.endsWith("item/rechels-ring-of-larceny")) {
aLinks[i].href = aLinks[i].href.replace("item/rechels-ring-of-larceny", "item/rechels-ring-of-larceny-Unique_Ring_104_x1");
} else 
if (aLinks[i].href.endsWith("item/arcstone")) {
aLinks[i].href = aLinks[i].href.replace("item/arcstone", "item/arcstone-P2_Unique_Ring_03");
} else 
if (aLinks[i].href.endsWith("item/band-of-the-rue-chambers")) {
aLinks[i].href = aLinks[i].href.replace("item/band-of-the-rue-chambers", "item/band-of-the-rue-chambers-Unique_Ring_106_x1");
} else 
if (aLinks[i].href.endsWith("item/rogars-huge-stone")) {
aLinks[i].href = aLinks[i].href.replace("item/rogars-huge-stone", "item/rogars-huge-stone-Unique_Ring_103_x1");
} else 
if (aLinks[i].href.endsWith("item/wyrdward")) {
aLinks[i].href = aLinks[i].href.replace("item/wyrdward", "item/wyrdward-Unique_Ring_102_p2");
} else 
if (aLinks[i].href.endsWith("item/the-short-mans-finger")) {
aLinks[i].href = aLinks[i].href.replace("item/the-short-mans-finger", "item/the-short-mans-finger-P61_Unique_Ring_01");
} else 
if (aLinks[i].href.endsWith("item/lornelles-sunstone-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/lornelles-sunstone-P6", "item/lornelles-sunstone-P6_Unique_Ring_04");
} else 
if (aLinks[i].href.endsWith("item/nagelring")) {
aLinks[i].href = aLinks[i].href.replace("item/nagelring", "item/nagelring-Unique_Ring_018_p2");
} else 
if (aLinks[i].href.endsWith("item/obsidian-ring-of-the-zodiac")) {
aLinks[i].href = aLinks[i].href.replace("item/obsidian-ring-of-the-zodiac", "item/obsidian-ring-of-the-zodiac-Unique_Ring_023_p2");
} else 
if (aLinks[i].href.endsWith("item/justice-lantern")) {
aLinks[i].href = aLinks[i].href.replace("item/justice-lantern", "item/justice-lantern-P4_Unique_Ring_03");
} else 
if (aLinks[i].href.endsWith("item/bulkathoss-wedding-band")) {
aLinks[i].href = aLinks[i].href.replace("item/bulkathoss-wedding-band", "item/bulkathoss-wedding-band-Unique_Ring_020_x1");
} else 
if (aLinks[i].href.endsWith("item/eternal-union")) {
aLinks[i].href = aLinks[i].href.replace("item/eternal-union", "item/eternal-union-Unique_Ring_007_p1");
} else 
if (aLinks[i].href.endsWith("item/krysbins-sentence-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/krysbins-sentence-P6", "item/krysbins-sentence-P6_Unique_Ring_03");
} else 
if (aLinks[i].href.endsWith("item/halo-of-arlyse")) {
aLinks[i].href = aLinks[i].href.replace("item/halo-of-arlyse", "item/halo-of-arlyse-p2_Unique_Ring_Wizard_001");
} else 
if (aLinks[i].href.endsWith("item/convention-of-elements")) {
aLinks[i].href = aLinks[i].href.replace("item/convention-of-elements", "item/convention-of-elements-P2_Unique_Ring_04");
} else 
if (aLinks[i].href.endsWith("item/skull-grasp")) {
aLinks[i].href = aLinks[i].href.replace("item/skull-grasp", "item/skull-grasp-P61_Unique_Ring_02");
} else 
if (aLinks[i].href.endsWith("item/band-of-hollow-whispers")) {
aLinks[i].href = aLinks[i].href.replace("item/band-of-hollow-whispers", "item/band-of-hollow-whispers-Unique_Ring_001_x1");
} else 
if (aLinks[i].href.endsWith("item/ring-of-emptiness")) {
aLinks[i].href = aLinks[i].href.replace("item/ring-of-emptiness", "item/ring-of-emptiness-P42_Unique_Ring_Haunt");
} else 
if (aLinks[i].href.endsWith("item/kredes-flame")) {
aLinks[i].href = aLinks[i].href.replace("item/kredes-flame", "item/kredes-flame-Unique_Ring_003_x1");
} else 
if (aLinks[i].href.endsWith("item/elusive-ring")) {
aLinks[i].href = aLinks[i].href.replace("item/elusive-ring", "item/elusive-ring-P4_Unique_Ring_02");
} else 
if (aLinks[i].href.endsWith("item/stone-of-jordan")) {
aLinks[i].href = aLinks[i].href.replace("item/stone-of-jordan", "item/stone-of-jordan-Unique_Ring_019_x1");
} else 
if (aLinks[i].href.endsWith("item/unity")) {
aLinks[i].href = aLinks[i].href.replace("item/unity", "item/unity-Unique_Ring_010_x1");
} else 
if (aLinks[i].href.endsWith("item/oculus-ring")) {
aLinks[i].href = aLinks[i].href.replace("item/oculus-ring", "item/oculus-ring-Unique_Ring_017_p4");
} else 
if (aLinks[i].href.endsWith("item/briggs-wrath-P6")) {
aLinks[i].href = aLinks[i].href.replace("item/briggs-wrath-P6", "item/briggs-wrath-P6_Unique_Ring_02");
} else 
if (aLinks[i].href.endsWith("item/litany-of-the-undaunted")) {
aLinks[i].href = aLinks[i].href.replace("item/litany-of-the-undaunted", "item/litany-of-the-undaunted-Unique_Ring_015_x1");
} else 
if (aLinks[i].href.endsWith("item/the-compass-rose")) {
aLinks[i].href = aLinks[i].href.replace("item/the-compass-rose", "item/the-compass-rose-Unique_Ring_013_x1");
} else 
if (aLinks[i].href.endsWith("item/the-wailing-host")) {
aLinks[i].href = aLinks[i].href.replace("item/the-wailing-host", "item/the-wailing-host-Unique_Ring_014_x1");
} else 
if (aLinks[i].href.endsWith("item/zunimassas-pox")) {
aLinks[i].href = aLinks[i].href.replace("item/zunimassas-pox", "item/zunimassas-pox-Unique_Ring_012_x1");
} else 
if (aLinks[i].href.endsWith("item/natalyas-reflection")) {
aLinks[i].href = aLinks[i].href.replace("item/natalyas-reflection", "item/natalyas-reflection-Unique_Ring_011_x1");
} else 
if (aLinks[i].href.endsWith("item/focus")) {
aLinks[i].href = aLinks[i].href.replace("item/focus", "item/focus-Unique_Ring_Set_001_x1");
} else 
if (aLinks[i].href.endsWith("item/restraint")) {
aLinks[i].href = aLinks[i].href.replace("item/restraint", "item/restraint-Unique_Ring_Set_002_x1");
} 

    } // includes /item/
}