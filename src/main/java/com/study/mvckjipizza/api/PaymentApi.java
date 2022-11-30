package com.study.mvckjipizza.api;

import com.siot.IamportRestClient.IamportClient;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;
import com.study.mvckjipizza.domain.Sales;
import com.study.mvckjipizza.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Locale;


@Controller
public class PaymentApi {
    private IamportClient api;

    public PaymentApi() {
        this.api = new IamportClient("0171334086203846","rciJe7oPNMrYx5ZTIyjxsUUZCSJ0Q4KXNxyMHRt5sualIe69MBgWA24g3CtEo5LcRpIqqAZACb0wpydc");
    }
    @ResponseBody
    @RequestMapping("/payments/complete/{imp_uid}")
        public IamportResponse<Payment> paymentByImpUid(
            Model model
                , Locale locale
            , HttpSession session
            , @PathVariable("imp_uid") String imp_uid) throws IamportResponseException, IOException {

        return api.paymentByImpUid(imp_uid);
    }
}
