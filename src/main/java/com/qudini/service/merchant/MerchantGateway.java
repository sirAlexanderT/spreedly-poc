package com.qudini.service.merchant;

import com.qudini.service.persistence.core.GeneratedId;
import com.vladmihalcea.hibernate.type.json.JsonStringType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import java.io.Serializable;

@Entity
@Table(name = "merchant_gateway", uniqueConstraints = {
        @UniqueConstraint(name = "UK_gateway_type_merchant_id", columnNames = {"gateway_type", "merchant_id"})
})
@TypeDef(
        name = "json",
        typeClass = JsonStringType.class
)
public class MerchantGateway extends GeneratedId implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "token", columnDefinition = "VARCHAR(255)", nullable = false)
    private String token;

    @Column(name = "gateway_type", columnDefinition = "VARCHAR(255)", nullable = false)
    private String gatewayType;

    @Type(type = "json")
    @Column(name = "gateway_json", columnDefinition = "JSON")
    private String gatewayJson;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "merchant_id", columnDefinition = "BIGINT(20) NOT NULL")
    private Merchant merchant;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getGatewayType() {
        return gatewayType;
    }

    public void setGatewayType(String gatewayType) {
        this.gatewayType = gatewayType;
    }

    public String getGatewayJson() {
        return gatewayJson;
    }

    public void setGatewayJson(String gatewayJson) {
        this.gatewayJson = gatewayJson;
    }

    public Merchant getMerchant() {
        return merchant;
    }

    public void setMerchant(Merchant merchant) {
        this.merchant = merchant;
    }
}
