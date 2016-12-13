/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  A0Theme *myTheme = [[A0Theme alloc] init];

  //[myTheme registerImageWithName:@"Auth0" bundle:[NSBundle mainBundle] forKey:A0ThemeScreenBackgroundImageName];
  [myTheme registerColor:[UIColor colorWithRed:235 green:235 blue:255 alpha:0] forKey:A0ThemeIconBackgroundColor];
  [myTheme registerColor:[UIColor colorWithRed:0 green:0 blue:1 alpha:1] forKey:A0ThemePrimaryButtonNormalColor];
  [myTheme registerImageWithName:@"Group" bundle:[NSBundle mainBundle] forKey:A0ThemeIconImageName];
  [[A0Theme sharedInstance] registerTheme:myTheme];
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"equiauction"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
