const colorHex = {
  "Army Green": "#5f684f",
  Black: "#1f2020",
  Blue: "#315f9a",
  Brown: "#8a6a4b",
  "Dark Blue": "#283746",
  "Dark Green": "#233330",
  Green: "#5b7258",
  Grey: "#a9aaa2",
  Khaki: "#b6a47f",
  "Light Blue": "#86a9c3",
  Orange: "#d7aa8d",
  Peach: "#e3cab5",
  Pink: "#c86a76",
  Red: "#7d3343",
  White: "#f6f1e8",
  Yellow: "#f3d58f",
  "Dark Grey": "#35352f",
};

function variants(id, colors) {
  return colors.map((name) => ({
    name,
    hex: colorHex[name],
    imageUrl: `Clothes Image/${id.toUpperCase()}-${name}.png`,
  }));
}

const styleFitConfig = window.STYLEFIT_CONFIG || {};
const puterTextModel = styleFitConfig.puterTextModel || "gpt-5.4-nano";

const inventory = [
  {
    id: "mt-001",
    name: "AirKnit Boxy Tee",
    gender: "Men",
    type: "Top",
    price: 24.9,
    sizeRange: "XS-XL",
    fit: "Relaxed",
    color: "#bfd8d2",
    variants: variants("mt-001", ["Black", "Green", "White"]),
  },
  {
    id: "mt-002",
    name: "Utility Overshirt",
    gender: "Men",
    type: "Top",
    price: 49.9,
    sizeRange: "XS-XL",
    fit: "Regular",
    color: "#b8c09b",
    variants: variants("mt-002", ["Black", "Green", "Khaki"]),
  },
  {
    id: "mt-003",
    name: "Textured Polo",
    gender: "Men",
    type: "Top",
    price: 34.9,
    sizeRange: "XS-XL",
    fit: "Slim",
    color: "#8fb1c9",
    variants: variants("mt-003", ["Blue", "Red", "White"]),
  },
  {
    id: "mt-004",
    name: "Zip Neck Sweatshirt",
    gender: "Men",
    type: "Top",
    price: 45.9,
    sizeRange: "XS-XL",
    fit: "Relaxed",
    color: "#d0d0c8",
    variants: variants("mt-004", ["Black", "Green", "Grey"]),
  },
  {
    id: "mt-005",
    name: "Linen Blend Resort Shirt",
    gender: "Men",
    type: "Top",
    price: 39.9,
    sizeRange: "XS-XL",
    fit: "Regular",
    color: "#efd590",
    variants: variants("mt-005", ["Green", "White", "Yellow"]),
  },
  {
    id: "wt-001",
    name: "Ribbed Square Neck Tank",
    gender: "Women",
    type: "Top",
    price: 19.9,
    sizeRange: "XS-XL",
    fit: "Fitted",
    color: "#efb4bc",
    variants: variants("wt-001", ["Black", "Pink", "White"]),
  },
  {
    id: "wt-002",
    name: "Satin Wrap Blouse",
    gender: "Women",
    type: "Top",
    price: 42.9,
    sizeRange: "XS-XL",
    fit: "Draped",
    color: "#f3d9ad",
    variants: variants("wt-002", ["Blue", "Green", "White"]),
  },
  {
    id: "wt-003",
    name: "Cropped Denim Shirt",
    gender: "Women",
    type: "Top",
    price: 44.9,
    sizeRange: "XS-XL",
    fit: "Cropped",
    color: "#a9c6dc",
    variants: variants("wt-003", ["Black", "Blue", "White"]),
  },
  {
    id: "wt-004",
    name: "Soft Knit Cardigan",
    gender: "Women",
    type: "Top",
    price: 39.9,
    sizeRange: "XS-XL",
    fit: "Regular",
    color: "#dec1ad",
    variants: variants("wt-004", ["Green", "Peach", "Red"]),
  },
  {
    id: "wt-005",
    name: "Ruched Mesh Long Sleeve",
    gender: "Women",
    type: "Top",
    price: 32.9,
    sizeRange: "XS-XL",
    fit: "Bodycon",
    color: "#be7184",
    variants: variants("wt-005", ["Black", "Pink", "White"]),
  },
  {
    id: "mb-001",
    name: "Straight Fit Cargo Pants",
    gender: "Men",
    type: "Bottom",
    price: 59.9,
    sizeRange: "XS-XL",
    fit: "Straight",
    color: "#8c9778",
    variants: variants("mb-001", ["Black", "Green", "Khaki"]),
  },
  {
    id: "mb-002",
    name: "Tapered Tech Chinos",
    gender: "Men",
    type: "Bottom",
    price: 49.9,
    sizeRange: "XS-XL",
    fit: "Tapered",
    color: "#9aa9b8",
    variants: variants("mb-002", ["Black", "Brown", "White"]),
  },
  {
    id: "mb-003",
    name: "Relaxed Denim Jeans",
    gender: "Men",
    type: "Bottom",
    price: 54.9,
    sizeRange: "XS-XL",
    fit: "Relaxed",
    color: "#7795b2",
    variants: variants("mb-003", ["Black", "Dark Blue", "Light Blue"]),
  },
  {
    id: "mb-004",
    name: "Pleated Wide Leg Trousers",
    gender: "Men",
    type: "Bottom",
    price: 62.9,
    sizeRange: "XS-XL",
    fit: "Wide",
    color: "#b7b9ad",
    variants: variants("mb-004", ["Army Green", "Dark Green", "White"]),
  },
  {
    id: "mb-005",
    name: "Lightweight Drawstring Shorts",
    gender: "Men",
    type: "Bottom",
    price: 29.9,
    sizeRange: "XS-XL",
    fit: "Regular",
    color: "#ead7ad",
    variants: variants("mb-005", ["Blue", "Dark Grey", "Khaki"]),
  },
  {
    id: "wb-001",
    name: "High Rise Wide Jeans",
    gender: "Women",
    type: "Bottom",
    price: 54.9,
    sizeRange: "XS-XL",
    fit: "Wide",
    color: "#9dbbd0",
    variants: variants("wb-001", ["Dark Blue", "Light Blue", "White"]),
  },
  {
    id: "wb-002",
    name: "Tailored Mini Skort",
    gender: "Women",
    type: "Bottom",
    price: 36.9,
    sizeRange: "XS-XL",
    fit: "A-line",
    color: "#d68b98",
    variants: variants("wb-002", ["Black", "Pink", "White"]),
  },
  {
    id: "wb-003",
    name: "Satin Bias Midi Skirt",
    gender: "Women",
    type: "Bottom",
    price: 46.9,
    sizeRange: "XS-XL",
    fit: "Fluid",
    color: "#d7aa8d",
    variants: variants("wb-003", ["Green", "Orange", "Red"]),
  },
  {
    id: "wb-004",
    name: "Cuffed Barrel Pants",
    gender: "Women",
    type: "Bottom",
    price: 57.9,
    sizeRange: "XS-XL",
    fit: "Barrel",
    color: "#c8bda5",
    variants: variants("wb-004", ["Black", "Green", "Khaki"]),
  },
  {
    id: "wb-005",
    name: "Stretch Flare Leggings",
    gender: "Women",
    type: "Bottom",
    price: 34.9,
    sizeRange: "XS-XL",
    fit: "Flared",
    color: "#8c8fa8",
    variants: variants("wb-005", ["Black", "Blue", "Pink"]),
  },
];

const state = {
  gender: "all",
  type: "all",
  search: "",
};

const cart = [];
const grid = document.querySelector("#inventory-grid");
const visibleCount = document.querySelector("#visible-count");
const searchButton = document.querySelector("#search-button");
const searchPage = document.querySelector("#search-page");
const searchInput = document.querySelector("#search-input");
const clearSearch = document.querySelector("#clear-search");
const backSearch = document.querySelector("#back-search");
const bagButton = document.querySelector("#bag-button");
const bagCount = document.querySelector("#bag-count");
const cartDrawer = document.querySelector("#cart-drawer");
const closeCart = document.querySelector("#close-cart");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const checkoutButton = document.querySelector(".checkout-button");
const sizeModal = document.querySelector("#size-modal");
const closeSizeModal = document.querySelector("#close-size-modal");
const sizeModalTitle = document.querySelector("#size-modal-title");
const sizeModalDetail = document.querySelector("#size-modal-detail");
const sizeOptions = document.querySelector("#size-options");
const confirmSize = document.querySelector("#confirm-size");
const visualiseButton = document.querySelector("#visualise-button");
const visualiseChoice = document.querySelector("#visualise-choice");
const filterToggle = document.querySelector("#filter-toggle");
const inventoryToolbar = document.querySelector("#inventory-toolbar");
const selectOwnOutfitButton = document.querySelector("#select-own-outfit");
const aiRecommendOutfitButton = document.querySelector("#ai-recommend-outfit");
const profileModal = document.querySelector("#profile-modal");
const closeProfileModal = document.querySelector("#close-profile-modal");
const profileForm = document.querySelector("#profile-form");
const photoModal = document.querySelector("#photo-modal");
const closePhotoModal = document.querySelector("#close-photo-modal");
const photoForm = document.querySelector("#photo-form");
const profilePhoto = document.querySelector("#profile-photo");
const photoPreview = document.querySelector("#photo-preview");
const photoPreviewImage = document.querySelector("#photo-preview-image");
const removePhoto = document.querySelector("#remove-photo");
const photoError = document.querySelector("#photo-error");
const backToProfile = document.querySelector("#back-to-profile");
const ownOutfitModal = document.querySelector("#own-outfit-modal");
const closeOwnOutfit = document.querySelector("#close-own-outfit");
const ownGenderButtons = document.querySelectorAll("[data-own-gender]");
const ownTopOptions = document.querySelector("#own-top-options");
const ownBottomOptions = document.querySelector("#own-bottom-options");
const ownOutfitError = document.querySelector("#own-outfit-error");
const resetOwnOutfit = document.querySelector("#reset-own-outfit");
const continueOwnOutfit = document.querySelector("#continue-own-outfit");
const ownProfileModal = document.querySelector("#own-profile-modal");
const closeOwnProfile = document.querySelector("#close-own-profile");
const ownProfileForm = document.querySelector("#own-profile-form");
const ownProfileGender = document.querySelector("#own-profile-gender");
const ownProfileHeight = document.querySelector("#own-profile-height");
const ownProfileBodySize = document.querySelector("#own-profile-body-size");
const ownProfileError = document.querySelector("#own-profile-error");
const backToOwnOutfit = document.querySelector("#back-to-own-outfit");
const recommendationModal = document.querySelector("#recommendation-modal");
const closeRecommendationModal = document.querySelector("#close-recommendation-modal");
const recommendationSummary = document.querySelector("#recommendation-summary");
const recommendationStage = document.querySelector("#recommendation-stage");
const outfitPosition = document.querySelector("#outfit-position");
const previousOutfit = document.querySelector("#previous-outfit");
const nextOutfit = document.querySelector("#next-outfit");
const previewReferenceButton = document.querySelector("#preview-reference-button");
const previewError = document.querySelector("#preview-error");
const previewModal = document.querySelector("#preview-modal");
const closePreviewModal = document.querySelector("#close-preview-modal");
const generatedPreview = document.querySelector("#generated-preview");
const generatedPreviewImage = document.querySelector("#generated-preview-image");
const addPreviewOutfit = document.querySelector("#add-preview-outfit");
let pendingCartItem = null;
let selectedSize = "";
let outfitProfile = null;
let currentPreviewOutfit = null;
let currentPreviewProfile = null;
let uploadedProfilePhoto = null;
let uploadedProfilePhotoUrl = "";
let uploadedProfileAnalysis = "";
let photoFlowMode = "recommendation";
let pendingOwnProfile = null;
let recommendedOutfits = [];
let activeOutfitIndex = 0;
let selectedOwnTop = null;
let selectedOwnBottom = null;
let ownGenderFilter = "Men";

function formatPrice(price) {
  return `RM ${price.toFixed(2)}`;
}

function itemMatchesSearch(item) {
  const query = state.search.trim().toLowerCase();

  if (!query) {
    return true;
  }

  const searchableText = [
    item.id,
    item.name,
    item.gender,
    item.type,
    item.fit,
    item.sizeRange,
    ...item.variants.map((variant) => variant.name),
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(query);
}

function getSizeOptions(sizeRange) {
  return ["XS", "S", "M", "L", "XL"];
}

function recommendedSizeForProfile(profile) {
  const sizes = getSizeOptions("XS-XL");
  const bodySizeIndex = {
    Slim: 1,
    Medium: 2,
    Heavy: 3,
  };
  const height = Number(profile?.height);
  let index = bodySizeIndex[profile?.bodySize] ?? 2;

  if (height >= 185) {
    index += 1;
  } else if (height && height <= 155) {
    index -= 1;
  }

  return sizes[Math.max(0, Math.min(sizes.length - 1, index))];
}

function recommendationErrorMessage(error) {
  const message = error.message || "AI recommendation failed.";

  if (message.includes("high demand") || message.includes("UNAVAILABLE") || message.includes('"code": 503')) {
    return "The AI model is currently experiencing high demand. Please wait a moment and click Generate again.";
  }

  if (message.includes("Puter.js")) {
    return `${message} Check your internet connection and refresh the app.`;
  }

  if (message.includes("Failed to parse")) {
    return `${message} Please click Generate again.`;
  }

  return message;
}

function chatResponseText(response) {
  if (typeof response === "string") {
    return response;
  }

  if (typeof response?.text === "string") {
    return response.text;
  }

  if (typeof response?.message?.content === "string") {
    return response.message.content;
  }

  if (Array.isArray(response?.message?.content)) {
    return response.message.content
      .map((part) => part.text || "")
      .join("\n")
      .trim();
  }

  return String(response || "");
}

function parseJsonObject(text) {
  const cleaned = text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    const match = cleaned.match(/\{[\s\S]*\}/);

    if (match) {
      return JSON.parse(match[0]);
    }

    throw new Error("Failed to parse AI JSON response.");
  }
}

function warningMessage(message, fallback) {
  const text = (message || fallback).trim();
  return /^warning:/i.test(text) ? text : `Warning: ${text}`;
}

async function validateUploadedPhoto(file, profile) {
  if (!window.puter?.ai?.chat) {
    throw new Error("Puter.js OpenAI chat is not loaded.");
  }

  const selectedProfile = profile.gender === "Men" ? "male" : "female";
  const prompt = `
You are validating a customer photo before an AI fashion preview.

Selected profile:
- Gender selection: ${profile.gender} (${selectedProfile} profile)

Check only these requirements:
1. The image must show a human person.
2. The image must show one main person only, not a group photo.
3. If the person's apparent gender presentation clearly conflicts with the selected ${selectedProfile} profile, flag it as a mismatch. If uncertain, do not flag a mismatch.

Return JSON only in this exact shape:
{
  "isHuman": true,
  "isSinglePerson": true,
  "hasGenderProfileMismatch": false,
  "message": "Short warning for the user if any requirement fails."
}
  `.trim();

  const response = await puter.ai.chat(prompt, file, {
    model: puterTextModel,
    temperature: 0,
    max_tokens: 350,
  });
  const validation = parseJsonObject(chatResponseText(response));

  if (validation.isHuman !== true) {
    throw new Error(warningMessage(validation.message, "Please upload a clear photo of a human person."));
  }

  if (validation.isSinglePerson !== true) {
    throw new Error(warningMessage(validation.message, "Please upload a photo with only one person, not a group photo."));
  }

  if (validation.hasGenderProfileMismatch === true) {
    throw new Error(
      warningMessage(
        validation.message,
        `The uploaded photo appears inconsistent with the selected ${selectedProfile} profile. Please upload another photo or change the selected profile.`
      )
    );
  }

  return validation;
}

function publicInventoryForAI(profile) {
  const topPrefix = profile.gender === "Men" ? "mt" : "wt";
  const bottomPrefix = profile.gender === "Men" ? "mb" : "wb";

  return inventory
    .filter((item) => {
      const id = item.id.toLowerCase();
      return item.gender === profile.gender && (id.startsWith(topPrefix) || id.startsWith(bottomPrefix));
    })
    .map((item) => ({
      id: item.id,
      name: item.name,
      gender: item.gender,
      type: item.type,
      price: item.price,
      fit: item.fit,
      variants: item.variants.map((variant) => ({
        name: variant.name,
        imageUrl: variant.imageUrl,
      })),
    }));
}

function outfitFromAIRecommendation(recommendation) {
  const top = inventory.find((item) => item.id === recommendation.topId);
  const bottom = inventory.find((item) => item.id === recommendation.bottomId);

  if (!top || !bottom || top.gender !== outfitProfile.gender || bottom.gender !== outfitProfile.gender) {
    return null;
  }

  const expectedTopPrefix = outfitProfile.gender === "Men" ? "mt" : "wt";
  const expectedBottomPrefix = outfitProfile.gender === "Men" ? "mb" : "wb";

  if (!top.id.startsWith(expectedTopPrefix) || !bottom.id.startsWith(expectedBottomPrefix)) {
    return null;
  }

  const topVariant = top.variants.find((variant) => variant.name === recommendation.topColor) || top.variants[0];
  const bottomVariant = bottom.variants.find((variant) => variant.name === recommendation.bottomColor) || bottom.variants[0];

  return {
    top,
    topVariant,
    bottom,
    bottomVariant,
    score: 0,
    reason: recommendation.reason,
    source: "AI",
  };
}

async function analyzeUploadedPhoto(file, profile) {
  if (!window.puter?.ai?.chat) {
    throw new Error("Puter.js OpenAI chat is not loaded.");
  }

  const prompt = `
Analyze this uploaded customer photo for fashion styling only.

Customer profile:
- Gender selection: ${profile.gender}
- Height: ${profile.height} cm
- Body size: ${profile.bodySize}
- Preferred style: ${profile.preferredStyle}
- Color preference: ${profile.colorPreference}

Return a concise styling analysis that can help choose clothing colors and silhouettes.
Mention visible appearance cues, ESPECIALLY race, complexion/skin tone range, hair color, hairstyle, face shape impression, contrast level, and general styling vibe.
Keep it under 90 words.
  `.trim();

  const response = await puter.ai.chat(prompt, file, {
    model: puterTextModel,
    temperature: 0.2,
    max_tokens: 220,
  });

  return chatResponseText(response);
}

async function getAIRecommendedOutfits(profile, imageAnalysis = "") {
  if (!window.puter?.ai?.chat) {
    throw new Error("Puter.js OpenAI chat is not loaded.");
  }

  const prompt = `
You are StyleFit AI, an outfit recommendation assistant for a fast-fashion retailer.
Recommend complete outfits only from the provided inventory.
Never invent item IDs, colors, prices, names, or categories.
For Male/Men profiles use only MT top IDs and MB bottom IDs.
For Female/Women profiles use only WT top IDs and WB bottom IDs.
Each outfit must contain exactly one top and one bottom.
Use the customer's height, body size, preferred style, color preference, and image styling analysis to rank outfits.

Customer profile:
${JSON.stringify(profile, null, 2)}

Image styling analysis:
${imageAnalysis || "No image analysis available."}

Available inventory:
${JSON.stringify(publicInventoryForAI(profile), null, 2)}

Return JSON only in this exact shape:
{
  "outfits": [
    {
      "topId": "mt-001",
      "topColor": "Black",
      "bottomId": "mb-001",
      "bottomColor": "Khaki",
      "reason": "Short reason based on fit, style, colors, body size, height, and image analysis."
    }
  ]
}
Return 6 ranked outfit recommendations if possible.
  `.trim();

  const response = await puter.ai.chat(prompt, {
    model: puterTextModel,
    temperature: 0.2,
    max_tokens: 1400,
  });
  const data = parseJsonObject(chatResponseText(response));
  const aiOutfits = data.outfits.map(outfitFromAIRecommendation).filter(Boolean);

  if (aiOutfits.length === 0) {
    throw new Error("AI returned no usable outfits from the current inventory.");
  }

  return aiOutfits;
}

async function generateOutfitPreview(outfit, profile = outfitProfile) {
  if (!window.puter?.ai?.txt2img) {
    throw new Error("Puter.js image generation is not loaded. Check your internet connection and refresh the app.");
  }

  const genderLabel = profile.gender === "Men" ? "male" : "female";
  const preferredStyle = profile.preferredStyle || "User-selected outfit";
  const colorPreference = profile.colorPreference || `${outfit.topVariant.name} and ${outfit.bottomVariant.name}`;
  const imageAnalysis = profile.imageAnalysis || uploadedProfileAnalysis || "No uploaded image styling analysis is available.";
  const prompt = `
Create one character-style fashion reference image in a real-world background.

Strict customer profile:
- Gender: ${genderLabel}
- Height: ${profile.height} cm
- Body size: ${profile.bodySize}
- Preferred style: ${preferredStyle}
- Color preference: ${colorPreference}

Uploaded image styling analysis:
${imageAnalysis}

Strict outfit:
- Top: ${outfit.top.id.toUpperCase()} ${outfit.top.name}, ${outfit.topVariant.name}, ${outfit.top.fit} fit
- Bottom: ${outfit.bottom.id.toUpperCase()} ${outfit.bottom.name}, ${outfit.bottomVariant.name}, ${outfit.bottom.fit} fit

STRICT CHARACTER APPEARANCE REQUIREMENT:
- Create a character EXACTLY by the uploaded image styling analysis.
- Reflect the described complexion or skin tone range, race, hair color, hairstyle, face-shape impression, contrast level, and general styling vibe where available.
- Make sure the character's race matches the race in the uploaded image.
- Identify or exactly copy the person.
- Do not change the user's selected gender presentation, height impression, or body size.

STRICT CLOTHING REQUIREMENT:
- The character must wear EXACTLY the selected top and EXACTLY the selected bottom described above.
- Match the top category, bottom category, colors, fit, and overall silhouette as closely as possible.
- Do not add, replace, recolor, or hide the selected clothing.
- No extra jackets, coats, bags, scarves, hats, or accessories that cover the outfit.

Show a full-body character wearing only this top and bottom. Preserve the stated gender, height impression, body size, uploaded-image styling cues, clothing colors, clothing categories, and style preference. Put the character in a realistic everyday background such as a campus walkway, city street, cafe exterior, or shopping district. Clean lighting, natural proportions, visible full outfit, no text, no labels, no logos, no watermark.
  `.trim();

  const imageElement = await puter.ai.txt2img(prompt, {
    model: "gpt-image-2",
    quality: "low",
  });

  if (!imageElement?.src) {
    throw new Error("Puter did not return a generated image.");
  }

  return {
    imageDataUrl: imageElement.src,
    description: "Generated with Puter.js image generation.",
  };
}

function renderInventory() {
  const visibleItems = inventory.filter((item) => {
    const genderMatch = state.gender === "all" || item.gender === state.gender;
    const typeMatch = state.type === "all" || item.type === state.type;
    return genderMatch && typeMatch && itemMatchesSearch(item);
  });

  visibleCount.textContent = visibleItems.length;

  if (visibleItems.length === 0) {
    grid.innerHTML = `<div class="empty-state">No clothes match your search.</div>`;
    return;
  }

  grid.innerHTML = visibleItems
    .map((item) => {
      const defaultVariant = item.variants[0];

      return `
        <article class="item-card" style="--item-color: ${item.color}" data-item-id="${item.id}">
          <div class="item-visual">
            <img src="${defaultVariant.imageUrl}" alt="${item.name} in ${defaultVariant.name}" loading="lazy" />
          </div>
          <div class="card-body">
            <div class="item-meta">
              <span>${item.gender} ${item.type}</span>
              <span>${item.id}</span>
            </div>
            <h2>${item.name}</h2>
            <div class="detail-row">
              <span>${item.fit} fit</span>
              <span class="price">${formatPrice(item.price)}</span>
            </div>
            <div class="detail-row">
              <span class="selected-color">${defaultVariant.name}</span>
              <span class="swatches" aria-label="Available colours">
                ${item.variants
                  .map(
                    (variant, index) => `
                      <button
                        class="swatch ${index === 0 ? "active" : ""}"
                        style="background:${variant.hex}"
                        type="button"
                        title="${variant.name}"
                        aria-label="${item.name} in ${variant.name}"
                        data-image="${variant.imageUrl}"
                        data-color-name="${variant.name}"
                      ></button>
                    `
                  )
                  .join("")}
              </span>
            </div>
            <div class="detail-row">
              <span>Sizes ${item.sizeRange}</span>
            </div>
            <button class="add-button" data-item-id="${item.id}" type="button">
              <span data-lucide="plus"></span>
              Add to outfit
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  lucide.createIcons();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openSizeModal(item, variant) {
  pendingCartItem = { item, variant };
  selectedSize = "";
  sizeModalTitle.textContent = item.name;
  sizeModalDetail.textContent = `${variant.name} - ${item.sizeRange}`;
  confirmSize.disabled = true;
  sizeOptions.innerHTML = getSizeOptions(item.sizeRange)
    .map(
      (size) => `
        <button class="size-option" type="button" data-size="${size}">
          ${size}
        </button>
      `
    )
    .join("");
  sizeModal.hidden = false;
  lucide.createIcons();
}

function closeSizePicker() {
  sizeModal.hidden = true;
  pendingCartItem = null;
  selectedSize = "";
  confirmSize.disabled = true;
}

function openProfileModal() {
  profileModal.hidden = false;
  document.querySelector("#profile-gender").focus();
  lucide.createIcons();
}

function closeProfilePicker() {
  profileModal.hidden = true;
}

function openPhotoModal() {
  photoError.hidden = true;
  photoError.textContent = "";
  clearUploadedPhoto();
  document.querySelector("#photo-modal-title").textContent =
    photoFlowMode === "own-preview" ? "Upload a clear photo for preview" : "Upload a clear face photo";
  document.querySelector("#photo-modal-copy").textContent =
    photoFlowMode === "own-preview"
      ? "The analyzer will use it to style your selected outfit preview."
      : "Use a front-facing picture with good lighting.";
  photoModal.hidden = false;
  lucide.createIcons();
}

function closePhotoPicker() {
  photoModal.hidden = true;
}

function renderOwnOutfitOptions() {
  const renderOption = (item, variant) => `
    <button
      class="own-option"
      type="button"
      data-item-id="${item.id}"
      data-variant-name="${variant.name}"
      data-option-type="${item.type}"
      aria-label="${item.name} in ${variant.name}"
    >
      <img src="${variant.imageUrl}" alt="${item.name} in ${variant.name}" />
      <strong>${item.name}</strong>
      <span>${item.id.toUpperCase()} - ${item.gender} - ${variant.name}</span>
    </button>
  `;

  ownTopOptions.innerHTML = inventory
    .filter((item) => item.type === "Top" && item.gender === ownGenderFilter)
    .flatMap((item) => item.variants.map((variant) => renderOption(item, variant)))
    .join("");

  ownBottomOptions.innerHTML = inventory
    .filter((item) => item.type === "Bottom" && item.gender === ownGenderFilter)
    .flatMap((item) => item.variants.map((variant) => renderOption(item, variant)))
    .join("");
}

function syncOwnSelectionStyles() {
  ownTopOptions.querySelectorAll(".own-option").forEach((option) => {
    option.classList.toggle(
      "active",
      selectedOwnTop?.item.id === option.dataset.itemId && selectedOwnTop?.variant.name === option.dataset.variantName
    );
  });

  ownBottomOptions.querySelectorAll(".own-option").forEach((option) => {
    option.classList.toggle(
      "active",
      selectedOwnBottom?.item.id === option.dataset.itemId && selectedOwnBottom?.variant.name === option.dataset.variantName
    );
  });
}

function openOwnOutfitModal(resetSelection = true) {
  ownOutfitError.hidden = true;
  ownOutfitError.textContent = "";

  if (resetSelection) {
    selectedOwnTop = null;
    selectedOwnBottom = null;
    ownGenderFilter = "Men";
  }

  ownGenderButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.ownGender === ownGenderFilter);
  });

  renderOwnOutfitOptions();
  syncOwnSelectionStyles();
  ownOutfitModal.hidden = false;
}

function closeOwnOutfitPicker() {
  ownOutfitModal.hidden = true;
}

function openOwnProfileModal() {
  ownProfileError.hidden = true;
  ownProfileError.textContent = "";
  ownProfileForm.reset();

  if (selectedOwnTop?.item?.gender) {
    ownProfileGender.value = selectedOwnTop.item.gender;
  }

  ownProfileModal.hidden = false;
  ownProfileHeight.focus();
  lucide.createIcons();
}

function closeOwnProfilePicker() {
  ownProfileModal.hidden = true;
}

function getOwnOutfit() {
  if (!selectedOwnTop || !selectedOwnBottom) {
    return null;
  }

  return {
    top: selectedOwnTop.item,
    topVariant: selectedOwnTop.variant,
    bottom: selectedOwnBottom.item,
    bottomVariant: selectedOwnBottom.variant,
    reason: "Selected by user",
    source: "Manual",
  };
}

function validateOwnOutfitSelection() {
  if (!selectedOwnTop || !selectedOwnBottom) {
    return "Please select at least one top and one bottom.";
  }

  if (selectedOwnTop.item.gender !== selectedOwnBottom.item.gender) {
    return "Please select a top and bottom from the same gender category.";
  }

  return "";
}

function openRecommendationModal() {
  document.body.classList.add("modal-lock");
  recommendationModal.hidden = false;
  renderRecommendedOutfit();
  lucide.createIcons();
}

function closeRecommendationPicker() {
  recommendationModal.hidden = true;
  document.body.classList.remove("modal-lock");
}

function openPreviewModal() {
  addPreviewOutfit.disabled = !currentPreviewOutfit;
  previewModal.hidden = false;
  lucide.createIcons();
}

function closePreviewPicker() {
  previewModal.hidden = true;
}

function renderRecommendedOutfit() {
  previewError.hidden = true;
  previewError.textContent = "";
  generatedPreviewImage.removeAttribute("src");
  currentPreviewOutfit = null;
  currentPreviewProfile = null;
  addPreviewOutfit.disabled = true;
  closePreviewPicker();

  if (recommendedOutfits.length === 0) {
    recommendationStage.innerHTML = `<div class="empty-state">No outfit sets are available for this profile.</div>`;
    outfitPosition.textContent = "0 / 0";
    return;
  }

  const outfit = recommendedOutfits[activeOutfitIndex];
  const profileLabel = outfitProfile.gender === "Men" ? "Male" : "Female";
  recommendationSummary.textContent = `Puter OpenAI powered AI - ${profileLabel} inventory only - ${outfitProfile.preferredStyle}, ${outfitProfile.colorPreference}`;
  outfitPosition.textContent = `${activeOutfitIndex + 1} / ${recommendedOutfits.length}`;
  recommendationStage.innerHTML = `
    <div class="outfit-slide">
      <div class="user-preview">
        <img src="${uploadedProfilePhotoUrl}" alt="Uploaded user reference" />
      </div>
      <div class="outfit-pieces">
        <article class="outfit-piece">
          <img src="${outfit.topVariant.imageUrl}" alt="${outfit.top.name} in ${outfit.topVariant.name}" />
          <div>
            <h3>${outfit.top.name}</h3>
            <p>${outfit.top.id.toUpperCase()} - ${outfit.topVariant.name} - ${outfit.top.fit} fit</p>
            <p>${formatPrice(outfit.top.price)}</p>
          </div>
        </article>
        <article class="outfit-piece">
          <img src="${outfit.bottomVariant.imageUrl}" alt="${outfit.bottom.name} in ${outfit.bottomVariant.name}" />
          <div>
            <h3>${outfit.bottom.name}</h3>
            <p>${outfit.bottom.id.toUpperCase()} - ${outfit.bottomVariant.name} - ${outfit.bottom.fit} fit</p>
            <p>${formatPrice(outfit.bottom.price)}</p>
          </div>
        </article>
        <p class="outfit-reason">${outfit.reason}</p>
      </div>
    </div>
  `;
}

function showOutfitAt(index) {
  if (recommendedOutfits.length === 0) {
    return;
  }

  activeOutfitIndex = (index + recommendedOutfits.length) % recommendedOutfits.length;
  renderRecommendedOutfit();
}

function clearUploadedPhoto() {
  if (uploadedProfilePhotoUrl) {
    URL.revokeObjectURL(uploadedProfilePhotoUrl);
  }

  uploadedProfilePhoto = null;
  uploadedProfilePhotoUrl = "";
  uploadedProfileAnalysis = "";
  profilePhoto.value = "";
  photoPreview.hidden = true;
  photoPreviewImage.removeAttribute("src");
}

function openSearchPage() {
  searchPage.hidden = false;
  state.search = searchInput.value;
  renderInventory();
  searchInput.focus();
}

function closeSearchPage() {
  searchInput.value = "";
  state.search = "";
  searchPage.hidden = true;
  renderInventory();
}

function renderCart() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  bagCount.textContent = totalQuantity;
  cartTotal.textContent = formatPrice(totalPrice);

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="empty-state">Your bag is empty.</div>`;
    lucide.createIcons();
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item">
          <img src="${item.imageUrl}" alt="${item.name} in ${item.colorName}" />
          <div>
            <h3>${item.name}</h3>
            <p>${item.colorName} - Size ${item.size}</p>
            <p>${formatPrice(item.price)}</p>
            <div class="quantity-controls" aria-label="Quantity controls">
              <button type="button" data-cart-action="decrease" data-cart-key="${item.key}" aria-label="Decrease quantity">
                <span data-lucide="minus"></span>
              </button>
              <strong>${item.quantity}</strong>
              <button type="button" data-cart-action="increase" data-cart-key="${item.key}" aria-label="Increase quantity">
                <span data-lucide="plus"></span>
              </button>
            </div>
          </div>
          <button class="remove-cart-item" type="button" data-cart-action="remove" data-cart-key="${item.key}" aria-label="Remove item">
            <span data-lucide="trash-2"></span>
          </button>
        </article>
      `
    )
    .join("");

  lucide.createIcons();
}

function addToCart(item, variant, size) {
  const key = `${item.id}-${variant.name}-${size}`;
  const existingItem = cart.find((cartItem) => cartItem.key === key);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      key,
      id: item.id,
      name: item.name,
      colorName: variant.name,
      imageUrl: variant.imageUrl,
      price: item.price,
      quantity: 1,
      size,
      sizeRange: item.sizeRange,
    });
  }

  renderCart();
  openCart();
}

function updateCartItem(key, action) {
  const itemIndex = cart.findIndex((item) => item.key === key);

  if (itemIndex === -1) {
    return;
  }

  if (action === "increase") {
    cart[itemIndex].quantity += 1;
  }

  if (action === "decrease") {
    cart[itemIndex].quantity -= 1;
  }

  if (action === "remove" || cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }

  renderCart();
}

filterToggle.addEventListener("click", () => {
  const isOpen = inventoryToolbar.classList.toggle("open");
  filterToggle.setAttribute("aria-expanded", String(isOpen));
  lucide.createIcons();
});

document.querySelectorAll("[data-filter-type]").forEach((button) => {
  button.addEventListener("click", () => {
    const filterType = button.dataset.filterType;
    state[filterType] = button.dataset.filterValue;

    document.querySelectorAll(`[data-filter-type="${filterType}"]`).forEach((peer) => {
      peer.classList.toggle("active", peer === button);
    });

    renderInventory();
  });
});

grid.addEventListener("click", (event) => {
  const swatch = event.target.closest(".swatch");
  const addButton = event.target.closest(".add-button");

  if (swatch) {
    const card = swatch.closest(".item-card");
    const image = card.querySelector(".item-visual img");
    const selectedColor = card.querySelector(".selected-color");

    image.src = swatch.dataset.image;
    image.alt = swatch.getAttribute("aria-label");
    selectedColor.textContent = swatch.dataset.colorName;

    card.querySelectorAll(".swatch").forEach((button) => {
      button.classList.toggle("active", button === swatch);
    });
  }

  if (addButton) {
    const card = addButton.closest(".item-card");
    const item = inventory.find((inventoryItem) => inventoryItem.id === addButton.dataset.itemId);
    const selectedColorName = card.querySelector(".selected-color").textContent;
    const variant = item.variants.find((variantOption) => variantOption.name === selectedColorName);

    openSizeModal(item, variant);
  }
});

searchButton.addEventListener("click", () => {
  openSearchPage();
});

searchInput.addEventListener("input", () => {
  state.search = searchInput.value;
  renderInventory();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  state.search = "";
  renderInventory();
  searchInput.focus();
});

backSearch.addEventListener("click", closeSearchPage);
bagButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) {
    closeCartDrawer();
  }
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");

  if (!button) {
    return;
  }

  updateCartItem(button.dataset.cartKey, button.dataset.cartAction);
});

sizeOptions.addEventListener("click", (event) => {
  const button = event.target.closest(".size-option");

  if (!button) {
    return;
  }

  selectedSize = button.dataset.size;
  confirmSize.disabled = false;

  sizeOptions.querySelectorAll(".size-option").forEach((option) => {
    option.classList.toggle("active", option === button);
  });
});

confirmSize.addEventListener("click", () => {
  if (!pendingCartItem || !selectedSize) {
    return;
  }

  addToCart(pendingCartItem.item, pendingCartItem.variant, selectedSize);
  closeSizePicker();
});

closeSizeModal.addEventListener("click", closeSizePicker);

sizeModal.addEventListener("click", (event) => {
  if (event.target === sizeModal) {
    closeSizePicker();
  }
});

visualiseButton.addEventListener("click", () => {
  visualiseChoice.hidden = !visualiseChoice.hidden;
  lucide.createIcons();
});

aiRecommendOutfitButton.addEventListener("click", () => {
  visualiseChoice.hidden = true;
  photoFlowMode = "recommendation";
  openProfileModal();
});

selectOwnOutfitButton.addEventListener("click", () => {
  visualiseChoice.hidden = true;
  openOwnOutfitModal();
});

closeOwnOutfit.addEventListener("click", closeOwnOutfitPicker);

ownOutfitModal.addEventListener("click", (event) => {
  if (event.target === ownOutfitModal) {
    closeOwnOutfitPicker();
  }
});

ownGenderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ownGenderFilter = button.dataset.ownGender;
    selectedOwnTop = null;
    selectedOwnBottom = null;
    ownOutfitError.hidden = true;
    ownOutfitError.textContent = "";

    ownGenderButtons.forEach((peer) => {
      peer.classList.toggle("active", peer === button);
    });

    renderOwnOutfitOptions();
  });
});

function handleOwnOptionClick(event) {
  const button = event.target.closest(".own-option");

  if (!button) {
    return;
  }

  const item = inventory.find((inventoryItem) => inventoryItem.id === button.dataset.itemId);
  const variant = item.variants.find((variantOption) => variantOption.name === button.dataset.variantName);
  const optionType = button.dataset.optionType;
  const optionGroup = optionType === "Top" ? ownTopOptions : ownBottomOptions;

  optionGroup.querySelectorAll(".own-option").forEach((option) => {
    option.classList.toggle("active", option === button);
  });

  if (optionType === "Top") {
    selectedOwnTop = { item, variant };
  } else {
    selectedOwnBottom = { item, variant };
  }

  ownOutfitError.hidden = true;
  ownOutfitError.textContent = "";
}

ownTopOptions.addEventListener("click", handleOwnOptionClick);
ownBottomOptions.addEventListener("click", handleOwnOptionClick);

resetOwnOutfit.addEventListener("click", () => {
  selectedOwnTop = null;
  selectedOwnBottom = null;
  ownOutfitError.hidden = true;
  ownOutfitError.textContent = "";
  ownTopOptions.querySelectorAll(".own-option").forEach((option) => option.classList.remove("active"));
  ownBottomOptions.querySelectorAll(".own-option").forEach((option) => option.classList.remove("active"));
});

continueOwnOutfit.addEventListener("click", () => {
  const error = validateOwnOutfitSelection();

  if (error) {
    ownOutfitError.textContent = error;
    ownOutfitError.hidden = false;
    return;
  }

  closeOwnOutfitPicker();
  openOwnProfileModal();
});

closeOwnProfile.addEventListener("click", closeOwnProfilePicker);

ownProfileModal.addEventListener("click", (event) => {
  if (event.target === ownProfileModal) {
    closeOwnProfilePicker();
  }
});

backToOwnOutfit.addEventListener("click", () => {
  closeOwnProfilePicker();
  openOwnOutfitModal(false);
});

ownProfileForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  ownProfileError.hidden = true;
  ownProfileError.textContent = "";

  const outfit = getOwnOutfit();

  if (!outfit) {
    ownProfileError.textContent = "Please go back and select one top and one bottom.";
    ownProfileError.hidden = false;
    return;
  }

  if (ownProfileGender.value !== outfit.top.gender) {
    ownProfileError.textContent = "Selected outfit category does not match the chosen gender.";
    ownProfileError.hidden = false;
    return;
  }

  const ownProfile = {
    gender: ownProfileGender.value,
    height: ownProfileHeight.value,
    bodySize: ownProfileBodySize.value,
    preferredStyle: "User-selected outfit",
    colorPreference: `${outfit.topVariant.name} and ${outfit.bottomVariant.name}`,
  };

  pendingOwnProfile = ownProfile;
  photoFlowMode = "own-preview";
  closeOwnProfilePicker();
  openPhotoModal();
});

closeProfileModal.addEventListener("click", closeProfilePicker);

profileModal.addEventListener("click", (event) => {
  if (event.target === profileModal) {
    closeProfilePicker();
  }
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  outfitProfile = {
    gender: document.querySelector("#profile-gender").value,
    height: document.querySelector("#profile-height").value,
    bodySize: document.querySelector("#profile-body-size").value,
    preferredStyle: document.querySelector("#profile-style").value,
    colorPreference: document.querySelector("#profile-color").value,
  };

  closeProfilePicker();
  openPhotoModal();
});

closePhotoModal.addEventListener("click", closePhotoPicker);

photoModal.addEventListener("click", (event) => {
  if (event.target === photoModal) {
    closePhotoPicker();
  }
});

backToProfile.addEventListener("click", () => {
  closePhotoPicker();

  if (photoFlowMode === "own-preview") {
    openOwnProfileModal();
  } else {
    openProfileModal();
  }
});

profilePhoto.addEventListener("change", () => {
  const [file] = profilePhoto.files;

  if (!file) {
    clearUploadedPhoto();
    return;
  }

  if (uploadedProfilePhotoUrl) {
    URL.revokeObjectURL(uploadedProfilePhotoUrl);
  }

  uploadedProfilePhoto = file;
  uploadedProfilePhotoUrl = URL.createObjectURL(file);
  photoPreviewImage.src = uploadedProfilePhotoUrl;
  photoPreview.hidden = false;
  lucide.createIcons();
});

removePhoto.addEventListener("click", clearUploadedPhoto);

photoForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  photoError.hidden = true;
  photoError.textContent = "";

  if (!uploadedProfilePhoto) {
    photoError.textContent = "Please upload a clear face photo before continuing.";
    photoError.hidden = false;
    return;
  }

  const generateButton = photoForm.querySelector('button[type="submit"]');
  generateButton.disabled = true;
  generateButton.textContent = "Validating...";

  try {
    const activeProfile = photoFlowMode === "own-preview" ? pendingOwnProfile : outfitProfile;
    await validateUploadedPhoto(uploadedProfilePhoto, activeProfile);
    generateButton.textContent = "Analyzing...";
    uploadedProfileAnalysis = await analyzeUploadedPhoto(uploadedProfilePhoto, activeProfile);
    generateButton.textContent = "Generating...";

    if (photoFlowMode === "own-preview") {
      const outfit = getOwnOutfit();

      if (!outfit || !pendingOwnProfile) {
        throw new Error("Please go back and select one top and one bottom.");
      }

      const previewProfile = {
        ...pendingOwnProfile,
        imageAnalysis: uploadedProfileAnalysis,
      };
      const preview = await generateOutfitPreview(outfit, previewProfile);
      generatedPreviewImage.src = preview.imageDataUrl;
      currentPreviewOutfit = outfit;
      currentPreviewProfile = previewProfile;
      closePhotoPicker();
      openPreviewModal();
    } else {
      recommendedOutfits = await getAIRecommendedOutfits(outfitProfile, uploadedProfileAnalysis);
      recommendedOutfits = recommendedOutfits.map((outfit) => ({
        ...outfit,
        source: "Puter OpenAI",
        imageAnalysis: uploadedProfileAnalysis,
      }));
      activeOutfitIndex = 0;
      closePhotoPicker();
      openRecommendationModal();
    }
  } catch (error) {
    console.error("AI recommendation failed:", error);
    photoError.textContent = recommendationErrorMessage(error);
    photoError.hidden = false;
  } finally {
    generateButton.disabled = false;
    generateButton.textContent = "Generate";
  }
});

closeRecommendationModal.addEventListener("click", closeRecommendationPicker);

recommendationModal.addEventListener("click", (event) => {
  if (event.target === recommendationModal) {
    closeRecommendationPicker();
  }
});

closePreviewModal.addEventListener("click", closePreviewPicker);

previewModal.addEventListener("click", (event) => {
  if (event.target === previewModal) {
    closePreviewPicker();
  }
});

previousOutfit.addEventListener("click", () => {
  showOutfitAt(activeOutfitIndex - 1);
});

nextOutfit.addEventListener("click", () => {
  showOutfitAt(activeOutfitIndex + 1);
});

previewReferenceButton.addEventListener("click", async () => {
  previewError.hidden = true;
  previewError.textContent = "";

  if (recommendedOutfits.length === 0) {
    previewError.textContent = "Generate an AI recommended outfit first.";
    previewError.hidden = false;
    return;
  }

  const outfit = recommendedOutfits[activeOutfitIndex];
  previewReferenceButton.disabled = true;
  previewReferenceButton.innerHTML = `<span data-lucide="loader-circle"></span> Creating preview...`;
  lucide.createIcons();

  try {
    const previewProfile = {
      ...outfitProfile,
      imageAnalysis: outfit.imageAnalysis || uploadedProfileAnalysis,
    };
    const preview = await generateOutfitPreview(outfit, previewProfile);
    generatedPreviewImage.src = preview.imageDataUrl;
    currentPreviewOutfit = outfit;
    currentPreviewProfile = previewProfile;
    openPreviewModal();
  } catch (error) {
    console.error("Puter image generation failed:", error);
    previewError.textContent = `${error.message} Please check your internet connection or Puter access.`;
    previewError.hidden = false;
  } finally {
    previewReferenceButton.disabled = false;
    previewReferenceButton.innerHTML = `<span data-lucide="image"></span> Create character-style outfit preview`;
    lucide.createIcons();
  }
});

addPreviewOutfit.addEventListener("click", () => {
  if (!currentPreviewOutfit) {
    return;
  }

  const size = recommendedSizeForProfile(currentPreviewProfile);
  addToCart(currentPreviewOutfit.top, currentPreviewOutfit.topVariant, size);
  addToCart(currentPreviewOutfit.bottom, currentPreviewOutfit.bottomVariant, size);
  addPreviewOutfit.innerHTML = `<span data-lucide="check"></span> Added to cart`;
  lucide.createIcons();

  window.setTimeout(() => {
    addPreviewOutfit.innerHTML = `<span data-lucide="shopping-bag"></span> Add outfit to cart`;
    lucide.createIcons();
  }, 1600);
});

let swipeStartX = 0;

recommendationStage.addEventListener("touchstart", (event) => {
  swipeStartX = event.touches[0].clientX;
});

recommendationStage.addEventListener("touchend", (event) => {
  const swipeEndX = event.changedTouches[0].clientX;
  const swipeDistance = swipeEndX - swipeStartX;

  if (Math.abs(swipeDistance) < 40) {
    return;
  }

  showOutfitAt(activeOutfitIndex + (swipeDistance < 0 ? 1 : -1));
});

checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your bag is empty.");
    return;
  }

  alert("Checkout is ready for the next prototype step.");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!sizeModal.hidden) {
      closeSizePicker();
    }

    if (!profileModal.hidden) {
      closeProfilePicker();
    }

    if (!photoModal.hidden) {
      closePhotoPicker();
    }

    if (!ownOutfitModal.hidden) {
      closeOwnOutfitPicker();
    }

    if (!ownProfileModal.hidden) {
      closeOwnProfilePicker();
    }

    if (!recommendationModal.hidden) {
      closeRecommendationPicker();
    }

    if (!previewModal.hidden) {
      closePreviewPicker();
    }

    closeCartDrawer();
    if (!searchPage.hidden) {
      closeSearchPage();
    }

    if (!visualiseChoice.hidden) {
      visualiseChoice.hidden = true;
    }
  }
});

renderInventory();
renderCart();
