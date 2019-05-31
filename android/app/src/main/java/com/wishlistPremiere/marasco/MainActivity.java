package com.wishlistPremiere.marasco;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

//import com.appyjump.sdk.AppyjumpAds;
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

    //AppyjumpAds appyjumpAds=new AppyjumpAds(this.getApplicationContext(), "c22775663dc50e5fad3d3404c027efd5", AppyjumpAds.BANNER);
    //appyjumpAds.show();

    // Branch init
    branch.initSession(new Branch.BranchReferralInitListener() {
      @Override
      public void onInitFinished(JSONObject referringParams, BranchError error) {
        if (error == null) {
          // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
          // params will be empty if no data found
          // ... insert custom logic here ...
          Log.i("BRANCH SDK", referringParams.toString());

          // option 2: save data to be used later
          // SharedPreferences preferences = .getSharedPreferences("MyPreferences", Context.MODE_PRIVATE);
          // SharedPreferences.Editor editor = preferences.edit();
          // editor.putString("branchData", referringParams.toString(2));
          // editor.commit();

          // option 3: navigate to page
          //Intent intent = new Intent(MainActivity.this, OtherActivity.class);
          //intent.putExtra("branchData", referringParams.toString(2));
          //startActivity(intent);

          // option 4: display data
          //Toast.makeText(this, referringParams.toString(2), Toast.LENGTH_LONG).show();
        } else {
          Log.i("BRANCH SDK", error.getMessage());
        }
      }
    }, this.getIntent().getData(), this);
  }

  // latest
  JSONObject sessionParams = Branch.getInstance().getLatestReferringParams();

  // first
  JSONObject installParams = Branch.getInstance().getFirstReferringParams();

  @Override
  public void onNewIntent(Intent intent) {
    this.setIntent(intent);
  }
}
