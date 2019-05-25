package com.wishlistPremiere.marasco;

import android.app.Application;

import io.branch.referral.Branch;

public final class CustomApplicationClass extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        // Initialize the Branch object
        Branch.getAutoInstance(this);
    }
}
