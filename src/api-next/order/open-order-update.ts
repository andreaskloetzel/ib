import { Order, OpenOrder } from "../..";
import { ItemListUpdate } from "../common/item-list-update";

/** An update on contract details. */
// export type OpenOrdersUpdate = ItemListUpdate<Order[]>;
export type OpenOrdersUpdate = ItemListUpdate<OpenOrder[]>;
