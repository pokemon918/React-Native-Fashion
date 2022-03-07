// Screens
export * from './Welcome/Welcome';
export * from './Onboarding/Onboarding';
export * from './OutfitIdeas/OutfitIdeas';

// Assets
import { assets as onboardingAssets } from './Onboarding/Onboarding.constants';
import { assets as welcomeAssets } from './Welcome/Welcome.constants';
export const assets = [...onboardingAssets, ...welcomeAssets];
