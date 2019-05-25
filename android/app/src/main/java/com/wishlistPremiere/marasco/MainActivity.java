package com.wishlistPremiere.marasco;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import org.json.JSONObject;

import java.util.ArrayList;

import io.branch.referral.Branch;
import io.branch.referral.BranchError;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);



    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }

  @Override
  public void onStart() {
    super.onStart();
    Branch branch = Branch.getInstance();

    // Branch init
    branch.initSession(new Branch.BranchReferralInitListener() {
      @Override
      public void onInitFinished(JSONObject referringParams, BranchError error) {
        if (error == null) {
          // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
          // params will be empty if no data found
          // ... insert custom logic here ...
          Log.i("BRANCH SDK", referringParams.toString());
        } else {
          Log.i("BRANCH SDK", error.getMessage());
        }
      }
    }, this.getIntent().getData(), this);
  }

  @Override
  public void onNewIntent(Intent intent) {
    this.setIntent(intent);
  }
}
