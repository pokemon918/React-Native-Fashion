// Screens
export * from './Welcome/Welcome';
export * from './Onboarding/Onboarding';

// Assets
import { assets as onboardingAssets } from './Onboarding/Onboarding.constants';
import { assets as welcomeAssets } from './Welcome/Welcome.constants';
export const assets = [...onboardingAssets, ...welcomeAssets];
