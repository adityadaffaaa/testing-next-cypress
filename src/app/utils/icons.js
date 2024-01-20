"use client";

import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const icons = {
  navbarIcon: {
    CloseIcon: () => (
      <Icon height={24} width={24} icon="ic:round-close" />
    ),
    MenuIcon: () => (
      <Icon
        height={24}
        width={24}
        className="text-textBlack"
        icon="healthicons:ui-menu-grid"
      />
    ),
    BellIcon: () => <Icon height={18} icon="ph:bell" />,
    LogoutIcon: () => (
      <Icon height={24} icon="ic:round-logout" />
    ),
    ArrowDownIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:keyboard-arrow-down-rounded"
      />
    ),
    AccountCircleIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:account-circle-outline"
      />
    ),
    LabProfileIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:lab-profile-outline-rounded"
      />
    ),
    ChatIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:chat-outline-rounded"
      />
    ),
    WishlistIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:heart-check-outline-rounded"
      />
    ),
    ArrowUpIcon: () => (
      <Icon
        className="animate-bounce"
        icon="ep:arrow-up-bold"
      />
    ),
    WalletIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:account-balance-wallet-outline"
      />
    ),
  },
  footerIcon: {
    InstagramIcon: () => (
      <Icon
        height={24}
        width={24}
        className="transition-default hover:scale-125"
        icon="mdi:instagram"
      />
    ),
    FacebookIcon: () => (
      <Icon
        height={24}
        width={24}
        className="transition-default hover:scale-125"
        icon="gg:facebook"
      />
    ),
  },
  homeScreenIcon: {
    SearchIcon: () => (
      <Icon
        className="hidden lg:block"
        icon="ri:search-line"
      />
    ),
    ArrowRightIcon: () => (
      <Icon
        className="lg:hidden"
        icon="octicon:arrow-right-16"
      />
    ),
    StarIcon: () => (
      <Icon
        className="text-secondary"
        icon="ic:baseline-star"
      />
    ),
    ArrowDownIcon: ({ clicked }) => (
      <Icon
        height={24}
        className={`text-white transition-linear ${
          clicked ? "rotate-180" : "rotate-0"
        }`}
        icon="iconamoon:arrow-down-2"
      />
    ),
    LocationIcon: () => <Icon icon="ion:location-sharp" />,
    StarIcon: () => (
      <Icon
        className="text-secondary"
        icon="ic:baseline-star"
      />
    ),
  },
  authScreenIcon: {
    ArrowBackIcon: ({ className }) => (
      <Icon
        icon="material-symbols:arrow-back-ios-rounded"
        className={className}
      />
    ),
    EyeIcon: () => <Icon height={20} icon="ion:eye" />,
    EyeCloseIcon: () => (
      <Icon height={20} icon="el:eye-close" />
    ),
    ArrowRightIcon: () => (
      <Icon icon="octicon:arrow-right-16" />
    ),
    FileIcon: () => (
      <Icon
        height={70}
        className="text-primary"
        icon="material-symbols:file-copy-rounded"
      />
    ),
  },
  productDetailIcon: {
    StarIcon: () => (
      <Icon
        icon="material-symbols:star-rounded"
        className="text-amber-300"
      />
    ),
    ArrowDownIcon: () => (
      <Icon
        icon="material-symbols:keyboard-arrow-down"
        className="text-[20px]"
      />
    ),
    ArrowForwardIcon: () => (
      <Icon
        icon="material-symbols:arrow-forward"
        className="text-[20px]"
      />
    ),
    SmsIcon: () => (
      <Icon
        icon="material-symbols:sms-outline"
        className="text-[20px]"
      />
    ),
    FavoriteOutlineIcon: () => (
      <Icon
        icon="material-symbols:favorite-outline"
        className="text-[20px] h-6"
      />
    ),
    ShareOutlineIcon: () => (
      <Icon
        icon="material-symbols:share-outline"
        className="text-[20px] h-6"
      />
    ),
  },
  searchFilterProductIcon: {
    SearchRoundedIcon: () => (
      <Icon
        icon="material-symbols:search-rounded"
        className="lg:hidden"
      />
    ),
    CancelIcon: () => (
      <Icon icon="material-symbols:cancel" />
    ),
    SearchIcon: () => (
      <Icon
        icon="material-symbols:search"
        className="text-white text-[24px]"
      />
    ),
    TuneRoundedIcon: () => (
      <Icon
        icon="material-symbols:tune-rounded"
        className="h-[14px]"
      />
    ),
    RoundCloseIcon: () => (
      <Icon
        height={24}
        width={24}
        icon="ic:round-close"
        className="lg:hidden"
      />
    ),
    StarIcon: () => (
      <Icon
        icon="material-symbols:star-rounded"
        className="text-amber-300"
      />
    ),
    ArrowBackIcon: () => (
      <Icon icon="material-symbols:arrow-back-rounded" />
    ),
  },

  vendorPortfolioIcon: {
    LinkIcon: () => <Icon icon="material-symbols:link" />,
    SmsIcon: () => (
      <Icon icon="material-symbols:sms-outline" />
    ),
    LocationIcon: () => (
      <Icon icon="material-symbols:location-on-outline" />
    ),
  },
  vendorProfileIcon: {
    LinkIcon: () => <Icon icon="material-symbols:link" />,
    SmsIcon: () => (
      <Icon icon="material-symbols:sms-outline" />
    ),
    LocationIcon: () => (
      <Icon icon="material-symbols:location-on-outline" />
    ),
    WebIcon: () => (
      <Icon height={18} icon="material-symbols:web" />
    ),
  },
  transactionProcessIcon: {
    ArrowForwardRoundedIcon: ({ height, className }) => (
      <Icon
        height={height ?? 24}
        icon="material-symbols:arrow-forward-ios-rounded"
        className={className}
      />
    ),
    LocalShippingIcon: () => (
      <Icon icon="material-symbols:local-shipping-rounded" />
    ),
    ArchiveIcon: () => (
      <Icon icon="material-symbols:archive" />
    ),
    CachedIcon: () => (
      <Icon icon="material-symbols:cached" />
    ),
    DescriptionIcon: () => (
      <Icon icon="material-symbols:description" />
    ),
    AwardStarIcon: () => (
      <Icon icon="material-symbols:award-star-rounded" />
    ),
    AddIcon: () => (
      <Icon
        icon="material-symbols:add"
        className="text-neutral-400"
        height={36}
      />
    ),
    ContentCopyOutlineIcon: () => (
      <Icon
        className="text-primary"
        icon="material-symbols:content-copy-outline"
      />
    ),
    DownloadForOfflineIcon: () => (
      <Icon
        className="text-neutral-500"
        icon="material-symbols:download-for-offline-outline-rounded"
      />
    ),
    AttachFileIcon: ({ onClick }) => (
      <Icon
        onClick={onClick}
        height={20}
        className="text-neutral-400"
        icon="material-symbols:attach-file-rounded"
      />
    ),
    DeleteIcon: ({ className }) => (
      <Icon
        icon={"material-symbols:delete-outline"}
        className={className}
      />
    ),
    SendIcon: ({ className }) => (
      <Icon
        icon="material-symbols:send-rounded"
        className={className}
      />
    ),
    StarIcon: () => (
      <Icon
        className="text-secondary"
        icon="ic:baseline-star"
      />
    ),
  },
  bookingIcon: {
    ArrowRightIcon: () => (
      <Icon icon="octicon:arrow-right-16" />
    ),
  },
  pengaturanUserIcon: {
    AddPhotoAlternateOutlineIcon: () => (
      <Icon
        icon={
          "material-symbols:add-photo-alternate-outline"
        }
        className="text-xl"
      />
    ),
    EditOutlineIcon: ({}) => (
      <Icon
        icon={"material-symbols:edit-outline"}
        className="text-xl text-primary"
      />
    ),
    CheckIcon: ({ className = "" }) => (
      <Icon
        icon={"material-symbols:check"}
        className={className}
      />
    ),
    EyeIcon: () => <Icon height={20} icon="ion:eye" />,
    EyeCloseIcon: () => (
      <Icon height={20} icon="el:eye-close" />
    ),
  },
  myProjectIcon: {
    ArrowRightIcon: () => (
      <Icon icon="material-symbols:arrow-forward-ios-rounded" />
    ),
    ShoppingBagIcon: () => (
      <Icon icon="material-symbols:shopping-bag-outline" />
    ),
  },
  tarikSaldoIcon: {
    SearchIcon: () => (
      <Icon
        className="text-2xl"
        icon="material-symbols:search-rounded"
      />
    ),
    InfoOutlineIcon: () => (
      <Icon
        icon={"material-symbols:info-outline"}
        height={28}
        width={28}
        className="text-3xl text-[#FBC947]"
      />
    ),
  },
  vendorDashboard: {
    sideBar: {
      HomeOutlineIcon: () => (
        <Icon
          icon={"material-symbols:home-outline"}
          className="text-lg"
        />
      ),
      ChatOutlineIcon: () => (
        <Icon
          icon={"material-symbols:chat-outline"}
          className="text-lg"
        />
      ),
      ContractOutlineIcon: () => (
        <Icon
          icon={"material-symbols:contract-outline"}
          className="text-lg"
        />
      ),
      InventoryIcon: () => (
        <Icon
          icon={"material-symbols:inventory-2"}
          className="text-lg"
        />
      ),
      DensityIcon: () => (
        <Icon
          icon={"material-symbols:density-medium"}
          className="text-lg"
        />
      ),
      ExpandMoreIcon: () => (
        <Icon
          icon={"material-symbols:expand-more"}
          className="text-lg"
        />
      ),
      SettingsOutlineIcon: () => (
        <Icon
          icon={"material-symbols:settings-outline"}
          className="text-lg"
        />
      ),
      TableChartViewOutlineIcon: () => (
        <Icon
          icon={"material-symbols:table-chart-view-outline"}
          className="text-lg"
        />
      ),
      InfoOutlineIcon: () => (
        <Icon
          icon={"material-symbols:info-outline"}
          className="text-lg"
        />
      ),
      PaymentOutlineIcon: () => (
        <Icon
          icon={"material-symbols:payments-outline"}
          className="text-lg"
        />
      ),
      RateReviewOutlineIcon: () => (
        <Icon
          icon={"material-symbols:rate-review-outline"}
          className="text-lg"
        />
      ),
      LogoutIcon: () => (
        <Icon height={24} icon="ic:round-logout" />
      ),
    },
    productListVendor: {
      VisibilityIcon: () => (
        <Icon
          icon={"material-symbols:visibility-outline"}
          className="text-textGrey"
        />
      ),
      ShoppingBagOutlineIcon: () => (
        <Icon
          icon={"material-symbols:shopping-bag-outline"}
          className="text-textGrey"
        />
      ),
      EditOutlineIcon: () => (
        <Icon
          icon={"material-symbols:edit-outline"}
          className="text-lg"
        />
      ),
      DeleteIcon: () => (
        <Icon
          icon={"material-symbols:delete-outline"}
          className="text-lg"
        />
      ),
      AddIcon: () => (
        <Icon
          icon={"material-symbols:add"}
          className="text-white"
        />
      ),
      SearchIcon: () => (
        <Icon
          className="text-2xl"
          icon="material-symbols:search-rounded"
        />
      ),
    },
    keuanganVendor: {
      InfoOutlineIcon: () => (
        <Icon
          icon={"material-symbols:info-outline"}
          height={28}
          width={28}
          className="text-3xl text-[#FBC947]"
        />
      ),
      SearchIcon: () => (
        <Icon
          className="text-2xl"
          icon="material-symbols:search-rounded"
        />
      ),
    },
    addProductVendor: {
      AddPhotoAlternateIcon: () => (
        <Icon
          height={32}
          icon="material-symbols:add-photo-alternate-outline-rounded"
        />
      ),
      AddIcon: () => (
        <Icon
          height={32}
          icon="material-symbols:add-rounded"
        />
      ),
      ArrowBackIcon: () => (
        <Icon icon="material-symbols:arrow-back-rounded" />
      ),
      DeleteIcon: ({ className }) => (
        <Icon
          icon={"material-symbols:delete-outline"}
          className={className}
        />
      ),
      WarningIcon: () => (
        <Icon
          className="text-secondary"
          icon="material-symbols:warning-outline-rounded"
        />
      ),
    },
    homeVendor: {
      AddCircleIcon: () => (
        <Icon icon="material-symbols:add-circle-outline-rounded" />
      ),
      AutoRenewIcon: () => (
        <Icon icon="material-symbols:autorenew-outline-rounded" />
      ),
      DoneIcon: () => (
        <Icon icon="material-symbols:done-rounded" />
      ),
      ArrowRightIcon: () => (
        <Icon icon="material-symbols:arrow-forward-ios-rounded" />
      ),
    },
    pesananMasukIcon: {
      SmsIcon: () => (
        <Icon
          icon={"material-symbols:sms-outline"}
          className="text-xl text-black"
        />
      ),
      ArrowDownIcon: () => (
        <Icon
          icon={"material-symbols:arrow-downward"}
          className="text-xl text-black"
        />
      ),
      CheckIcon: () => (
        <Icon
          icon={"material-symbols:check"}
          className="text-xl text-white"
        />
      ),
      CloseIcon: () => (
        <Icon
          icon={"material-symbols:close"}
          className="text-xl text-white"
        />
      ),
    },
    pengaturanAkunIcon: {
      CheckIcon: () => (
        <Icon
          icon={"material-symbols:check"}
          className="text-xl"
        />
      ),
      EditOutlineIcon: () => (
        <Icon
          icon={"material-symbols:edit-outline"}
          className="text-xl text-primary"
        />
      ),
    },
    chatIcon: {
      SearchIcon: () => (
        <Icon
          className="text-2xl"
          icon="material-symbols:search-rounded"
        />
      ),
    },
  },
};

export default icons;
