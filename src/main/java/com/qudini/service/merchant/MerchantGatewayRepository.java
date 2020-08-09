package com.qudini.service.merchant;

import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class MerchantGatewayRepository implements PanacheRepository<MerchantGateway> {
}
