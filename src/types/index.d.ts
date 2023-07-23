declare module "*.jpg";
declare module "*.png";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch