import React from "react";
import { ReactComponent as Check } from "../../../assets/images/check-box.svg";
import { ReactComponent as AdvertisingArrow } from "../../../assets/images/advertising-arrow.svg";
import { ReactComponent as LiCheck } from "../../../assets/images/li-done.svg";
import { ReactComponent as Plus } from "../../../assets/images/plus.svg";
import { ReactComponent as Start } from "../../../assets/images/star.svg";
import { ReactComponent as SLiderArrow } from "../../../assets/images/slider-arrow.svg";
import { ReactComponent as Close } from "../../../assets/images/icon-close.svg";
import { ReactComponent as MapMarker } from "../../../assets/images/marker.svg";
import { ReactComponent as Arrow } from "../../../assets/images/arrow.svg";
import { ReactComponent as CheckMark } from "../../../assets/images/check-mark.svg";
import { ReactComponent as VerticalArrows } from "../../../assets/images/vertical-arrows.svg";
import { ReactComponent as Remove } from "../../../assets/images/remove.svg";

import { ReactComponent as Vk } from "../../../assets/images/social-media/vk.svg";
import { ReactComponent as Inst } from "../../../assets/images/social-media/instagram.svg";
import { ReactComponent as Ok } from "../../../assets/images/social-media/ok.svg";
import { ReactComponent as Facebook } from "../../../assets/images/social-media/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/images/social-media/twitter.svg";

import { ReactComponent as Home } from "../../../assets/images/admin/nav-icon/home.svg";
import { ReactComponent as Credit } from "../../../assets/images/admin/nav-icon/credit.svg";
import { ReactComponent as Out } from "../../../assets/images/admin/nav-icon/out.svg";
import { ReactComponent as Search } from "../../../assets/images/admin/search.svg";
import { ReactComponent as VerticalDots } from "../../../assets/images/admin/vertical-dots.svg";
import { ReactComponent as CheckBlue } from "../../../assets/images/admin/check-blue.svg";
import { ReactComponent as Edit } from "../../../assets/images/admin/edit.svg";
import { ReactComponent as Save } from "../../../assets/images/admin/save.svg";

export const ICONS = {
  check_box: Check,
  advertising_arrow: AdvertisingArrow,
  li_check: LiCheck,
  plus: Plus,
  star: Start,
  slider_arrow: SLiderArrow,
  close: Close,
  map_marker: MapMarker,
  arrow: Arrow,
  inst: Inst,
  vk: Vk,
  facebook: Facebook,
  ok: Ok,
  twitter: Twitter,
  check_mark: CheckMark,
  vertical_arrows: VerticalArrows,
  remove: Remove,
  home: Home,
  credit: Credit,
  out: Out,
  search: Search,
  vertical_dits: VerticalDots,
  check_blue: CheckBlue,
  edit: Edit,
  save: Save,
};

export function Icon({ className, name, ...props }) {
  if (!(name in ICONS)) return null;
  const Component = ICONS[name];
  return <Component className={className} {...props} />;
}
